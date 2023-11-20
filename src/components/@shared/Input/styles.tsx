import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Paragraph100Regular } from '@styles/typography';

interface InputProps {
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  borderColor?: string;
  backGroundColor?: string;
  disabled?: boolean;
  isError?: boolean;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray004};
  border-radius: 8px;
  padding: 8px 12px;
  outline: none;
  color: ${colors.text002};
  caret-color: ${colors.key001};
  ${Paragraph100Regular}

  :focus {
    border-color: ${colors.key001};
  }
`;
