import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Title100SemiBold } from '@styles/typography';

export const Button = styled.button<{ disabled: boolean }>`
  border: none;
  border-radius: 16px;
  background-color: ${colors.key002};
  color: ${colors.white};
  text-align: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${Title100SemiBold}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.gray003};
      color: ${colors.gray008};
      cursor: not-allowed;
    `}
`;
