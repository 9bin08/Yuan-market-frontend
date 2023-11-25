import Icon from '@components/@shared/Icon';
import Input from '@components/@shared/Input';
import HighlightedText from '@components/HighlightedText';
import { useSearchListQuery } from '@pages/MarketPage/queries/useSearchList';
import { useCartSelector } from '@store/useCartStore';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './styles';

const SearchBar = () => {
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);
  const { cartItems } = useCartSelector(['cartItems']);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    searchParams.get('keyword') || ''
  );
  const { data: searchList } = useSearchListQuery(keyword);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
  };

  const handleSearchItemClick = (title: string) => {
    setIsShowSearchList(false);
    setKeyword(title);
    updateSearchParams('keyword', title);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      setIsShowSearchList(false);
      updateSearchParams('keyword', keyword);
    }
  };

  const onClickClearIcon = () => {
    setKeyword('');
    updateSearchParams('keyword', '');
    updateSearchParams('category', '');
  };

  const updateSearchParams = (param: string, value: string) => {
    if (value) {
      searchParams.set(param, value);
    } else {
      searchParams.delete(param);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <S.SearchBarContainer>
        <S.InputWrapper>
          <Input
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            onFocus={() => setIsShowSearchList(true)}
          />

          {keyword.length > 0 && (
            <S.IconWithPosition
              name={'닫기_기본_회색'}
              size={24}
              onClick={onClickClearIcon}
            />
          )}
        </S.InputWrapper>

        <S.IconWrapper>
          <Icon
            name="장바구니_기본_검정색"
            size={24}
            onClick={() => navigate('/cart')}
          />
          {cartItems.length > 0 && (
            <S.CartCount>{cartItems.length}</S.CartCount>
          )}
        </S.IconWrapper>
      </S.SearchBarContainer>
      {isShowSearchList && searchList && (
        <S.SearchListWrapper>
          {searchList.map((item: string, index: number) => (
            <S.SearchList
              key={index}
              onClick={() => handleSearchItemClick(item)}
            >
              <S.SearchName>
                <HighlightedText text={item} query={keyword} />
              </S.SearchName>
              <Icon name="화살표_왼쪽위_회색" size={24} />
            </S.SearchList>
          ))}
        </S.SearchListWrapper>
      )}
    </>
  );
};

export default SearchBar;
