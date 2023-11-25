import Icon from '@components/@shared/Icon';
import Image from '@components/@shared/Image';
import { useCartAction, useCartSelector } from '@store/useCartStore';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const CartPage = () => {
  const { cartItems } = useCartSelector(['cartItems']);
  const { removeFromCart } = useCartAction();
  const navigate = useNavigate();

  return (
    <S.CartPageContainer>
      <S.NavigateHeader>
        <Icon
          name="화살표_왼쪽_검정색"
          size={24}
          onClick={() => navigate(-1)}
        />
        <S.HeaderTitle>장바구니</S.HeaderTitle>
      </S.NavigateHeader>
      <S.MarketItemListWrapper>
        {cartItems.map(
          ({
            title,
            price,
            thumbnail,
            discount,
            discountPrice,
            discountPercent,
          }) => (
            <S.MarketItemCard key={title}>
              <S.ImageWrapper>
                <Image alt={title} src={thumbnail} width="152" height="152" />
                <S.CartRemoveIcon
                  name="닫기_기본_회색"
                  size={23}
                  onClick={() => removeFromCart(title)}
                />
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
    </S.CartPageContainer>
  );
};

export default CartPage;
