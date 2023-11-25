import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Heading100Bold } from '@styles/typography';

export const BottomSheetContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

export const SheetWrapper = styled.div<{ isOpen: boolean }>`
  width: var(--mobile-max-width);
  height: 500px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  z-index: 999;
  background-color: ${colors.white};
  border-radius: 24px 24px 0px 0px;
  transform: translate(-50%, 0);
`;

export const SheetHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 16px 20px;

  img {
    cursor: pointer;
  }
`;

export const SheetTitle = styled.h4`
  color: ${colors.text003};
  ${Heading100Bold};
`;

export const SheetButtonWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  left: 20px;
  width: 320px;
  height: 56px;
`;
