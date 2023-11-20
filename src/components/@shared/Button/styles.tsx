import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { ButtonPriority } from './index';

export const Button = styled.button<{ priority: ButtonPriority }>`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  background-color: transparent;
  text-align: center;
  width: 100%;
  height: 100%;
  ${({ priority }) => mapToBtnType(priority)};
`;

const mapToBtnType = (priority: ButtonPriority) => {
  switch (priority) {
    case 'primary':
      return css({
        color: colors.white,
      });
    case 'secondary':
      return css({
        color: colors.gray002,
      });
  }
};
