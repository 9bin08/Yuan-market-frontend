import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@styles/colors';
import { Paragraph300Regular, Paragraph300Semibold } from '@styles/typography';

export const TabsContainer = styled.section`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;

export const TabWrapper = styled.div`
  border-bottom: 1px solid ${colors.gray001};
  margin-bottom: 16px;
`;

export const TabButtonWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  height: 48px;
  background-color: transparent;
  color: ${colors.text003};
  border: none;

  ${Paragraph300Regular}
  ${({ active }) => active && activeStyle()};
`;

const activeStyle = () => css`
  border-bottom: 2px solid ${colors.text003};

  ${Paragraph300Semibold}
`;

export const TabPanel = styled.div<{ active?: boolean }>`
  flex: 1;
  padding: 0 20px;
  overflow-y: scroll;
  margin-bottom: 100px;

  ${({ active }) =>
    active &&
    css`
      visibility: visible;
    `};
`;
