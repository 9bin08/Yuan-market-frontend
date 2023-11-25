import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Footnote100SemiBold, Paragraph100Regular } from '@styles/typography';

export const SearchBarContainer = styled.section`
  box-sizing: border-box;
  height: var(--mobile-app-header-height);
  border-bottom: 1px solid ${colors.line};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  padding: 6px 17px 6px 22px;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const IconWithPosition = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translate(0%, -50%);
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: relative;

  img {
    cursor: pointer;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  padding: 1px 5px;
  background-color: ${colors.red001};
  border-radius: 9999px;
  color: ${colors.white};

  ${Footnote100SemiBold}
`;

export const SearchListWrapper = styled.ul`
  width: 324px;
  min-height: calc(100vh - var(--mobile-app-header-height));
  height: 100vh;
  margin: 0;
  padding: 0 16px 0 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 52px;
  background-color: ${colors.white};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const SearchList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid ${colors.gray001};
  cursor: pointer;

  mark {
    color: ${colors.key002};
    background-color: unset;
  }
`;

export const SearchName = styled.span`
  ${Paragraph100Regular}
`;
