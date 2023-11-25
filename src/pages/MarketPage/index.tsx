import Icon from '@components/@shared/Icon';
import Image from '@components/@shared/Image';
import BottomSheet from '@pages/MarketPage/components/BottomSheet';
import SearchBar from '@pages/MarketPage/components/SearchBar';
import Clip from '@components/Clip';
import useGoodsListQuery from './queries/useGoodsList';
import { useCartAction, useCartSelector } from '@store/useCartStore';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from './styles';

export type itemsType = {
  title: string;
  price: string;
  thumbnail: string;
  discount: boolean;
  discountPrice: string;
  discountPercent: string;
};

const MarketPage = () => {
  const [isShowBottomSheet, setIsShowBottomSheet] = useState<boolean>(false);
  const { addToCart } = useCartAction();
  const { cartItems } = useCartSelector(['cartItems']);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category')?.split(',') || []
  );
  const { data: goodsList, isLoading } = useGoodsListQuery(
    keyword,
    selectedCategories
  );

  const onClickCartIcon = (item: itemsType) => {
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem.title === item.title
    );

    if (isItemInCart) {
      alert('이미 장바구니에 담겨있습니다.');
    } else {
      addToCart(item);
    }
  };

  const toggleBottomSheet = useCallback(() => {
    setIsShowBottomSheet((prev) => !prev);
  }, []);

  const onCloseClip = (keywordToRemove: string) => {
    const updatedCategories = selectedCategories
      .filter((category) => category !== keywordToRemove)
      .join(',');

    searchParams.set('category', updatedCategories);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const categoryParams = searchParams.get('category');
    if (!categoryParams) searchParams.delete('category');

    setSelectedCategories(categoryParams?.split(',') || []);
    setSearchParams(searchParams);
  }, [searchParams.get('category')]);

  return (
    <>
      <SearchBar />
      <S.MarketPageContainer>
        <S.FilterOptionContainer>
          {selectedCategories.length > 0 && (
            <S.ClipWrapper>
              {selectedCategories.map((keyword, index) => (
                <Clip
                  key={index}
                  label={keyword}
                  onClose={() => onCloseClip(keyword)}
                />
              ))}
            </S.ClipWrapper>
          )}
          {goodsList && (
            <S.IconWithMargin
              name="필터링_기본_검정색"
              size={18}
              onClick={toggleBottomSheet}
            />
          )}
        </S.FilterOptionContainer>
        <S.MarketItemListWrapper>
          {isLoading ? (
            <div>loading...</div>
          ) : (
            goodsList &&
            goodsList.map((goods: itemsType, index: number) => (
              <S.MarketItemCard key={index}>
                <S.ImageWrapper onClick={() => onClickCartIcon(goods)}>
                  <Image
                    alt={goods.title}
                    src={goods.thumbnail}
                    width="152"
                    height="152"
                  />
                  <S.CartImgWrapper>
                    <Icon name="장바구니_기본_검정색" size={23} />
                  </S.CartImgWrapper>
                </S.ImageWrapper>
                <S.CardTitle>{goods.title}</S.CardTitle>
                {goods.discount ? (
                  <>
                    <S.CardDiscountPrice>
                      {goods.discountPrice}원
                    </S.CardDiscountPrice>
                    <S.DiscountPriceWrapper>
                      <S.CardDiscountPercent>
                        {goods.discountPercent}%
                      </S.CardDiscountPercent>
                      <S.CardPrice>{goods.price}원</S.CardPrice>
                    </S.DiscountPriceWrapper>
                  </>
                ) : (
                  <S.CardPrice>{goods.price}원</S.CardPrice>
                )}
              </S.MarketItemCard>
            ))
          )}
        </S.MarketItemListWrapper>
      </S.MarketPageContainer>
      {isShowBottomSheet && (
        <BottomSheet isOpen={isShowBottomSheet} onClose={toggleBottomSheet} />
      )}
    </>
  );
};

export default MarketPage;
