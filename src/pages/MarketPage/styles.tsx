import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import {
  Footnote300Regular,
  Title100SemiBold,
  Title200SemiBold,
} from '@styles/typography';

export const MarketPageContainer = styled.section`
  padding: 21px 19px 21px 21px;
  overflow-y: scroll;
`;

export const IconWithMargin = styled(Icon)`
  display: block;
  margin-left: auto;
  margin-bottom: 22px;
  height: 12px;
`;

export const MarketItemListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const MarketItemCard = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CartImgWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border: 1px solid ${colors.text002};
  background-color: ${colors.white};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
`;

export const CardTitle = styled.h4`
  margin-top: 8px;
  ${Footnote300Regular}
`;

export const CardPrice = styled.h5`
  margin-top: 4px;
  ${Title100SemiBold}
`;

export const CardDiscountPrice = styled.div`
  color: ${colors.gray005};
  text-decoration: line-through;
  margin-top: 4px;

  ${Footnote300Regular}
`;

export const DiscountPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const CardDiscountPercent = styled.strong`
  color: ${colors.red001};
  margin-top: 4px;
  ${Title200SemiBold}
`;
