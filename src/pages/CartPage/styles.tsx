import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import {
  Footnote300Regular,
  SubTitle100Bold,
  Title100SemiBold,
  Title200SemiBold,
} from '@styles/typography';

export const CartPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const NavigateHeader = styled.header`
  height: var(--mobile-app-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  border-bottom: 1px solid ${colors.gray002};

  img {
    position: absolute;
    left: 16px;
    top: 14px;
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${colors.text002};
  text-align: center;

  ${SubTitle100Bold}
`;

export const MarketItemListWrapper = styled.div`
  display: grid;
  max-height: calc(100vh - 100px);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 16px;
  margin-top: 16px;
  overflow-y: scroll;
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

export const CartRemoveIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
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
