import { requestCategory } from '@api/category';
import Icon from '@components/@shared/Icon';
import Input from '@components/@shared/Input';
import HighlightedText from '@components/HighlightedText';
import { useCartSelector, useCartStore } from '@store/useCartStore';
import {
  itemsType,
  useAuthAction,
  useSearchCategorySelector,
} from '@store/useSearchCategory';
import { useEffect, useState } from 'react';
import * as S from './styles';

const SearchBar = () => {
  const [searchList, setSearchList] = useState<[]>([]);
  const { keyword, searchItems } = useSearchCategorySelector([
    'keyword',
    'searchItems',
  ]);
  const { cartItems } = useCartSelector(['cartItems']);

  const { setKeyword, setSearchItems } = useAuthAction();

  const onClickClearIcon = () => {
    setKeyword('');
    setSearchItems([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
  };

  const handleSearchItemClick = (item: itemsType) => {
    setSearchItems([item]);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      setSearchItems([...searchList]);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await requestCategory(keyword);
        setSearchList(response.data.data);
      } catch (error) {
        // TODO : 에러 처리
      }
    };

    if (keyword.trim()) {
      fetchCategory();
    } else {
      setSearchList([]);
    }
  }, [keyword]);

  return (
    <>
      <S.SearchBarContainer>
        <S.InputWrapper>
          <Input
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
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
          <Icon name="장바구니_기본_검정색" size={24} />
          {cartItems.length > 0 && (
            <S.CartCount>{cartItems.length}</S.CartCount>
          )}
        </S.IconWrapper>
      </S.SearchBarContainer>
      {keyword.length > 0 && searchItems.length === 0 && (
        <S.SearchListWrapper>
          {searchList.map((item: itemsType) => (
            <S.SearchList
              key={item.title}
              onClick={() => handleSearchItemClick(item)}
            >
              <S.SearchName>
                {HighlightedText(item.title, keyword)}
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
