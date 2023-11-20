import Icon from '@components/@shared/Icon';
import Image from '@components/@shared/Image';
import SearchBar from '@components/SearchBar';
import { useCartAction, useCartSelector } from '@store/useCartStore';
import { itemsType, useSearchCategorySelector } from '@store/useSearchCategory';
import * as S from './styles';

const MarketPage = () => {
  const { searchItems } = useSearchCategorySelector(['searchItems']);
  const { addToCart } = useCartAction();
  const { cartItems } = useCartSelector(['cartItems']);

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

  return (
    <>
      <SearchBar />
      <S.MarketPageContainer>
        <S.IconWithMargin name="필터링_기본_검정색" size={18} />
        <S.MarketItemListWrapper>
          {searchItems.map(
            (
              {
                title,
                price,
                thumbnail,
                discount,
                discountPrice,
                discountPercent,
              },
              index
            ) => (
              <S.MarketItemCard key={index}>
                <S.ImageWrapper
                  onClick={() =>
                    onClickCartIcon({
                      title,
                      price,
                      thumbnail,
                      discount,
                      discountPrice,
                      discountPercent,
                    })
                  }
                >
                  <Image alt={title} src={thumbnail} width="152" height="152" />
                  <S.CartImgWrapper>
                    <Icon name="장바구니_기본_검정색" size={23} />
                  </S.CartImgWrapper>
                </S.ImageWrapper>
                <S.CardTitle>{title}</S.CardTitle>
                {discount ? (
                  <>
                    <S.CardDiscountPrice>{discountPrice}원</S.CardDiscountPrice>
                    <S.DiscountPriceWrapper>
                      <S.CardDiscountPercent>
                        {discountPercent}%
                      </S.CardDiscountPercent>
                      <S.CardPrice>{price}원</S.CardPrice>
                    </S.DiscountPriceWrapper>
                  </>
                ) : (
                  <S.CardPrice>{price}원</S.CardPrice>
                )}
              </S.MarketItemCard>
            )
          )}
        </S.MarketItemListWrapper>
      </S.MarketPageContainer>
    </>
  );
};

export default MarketPage;
