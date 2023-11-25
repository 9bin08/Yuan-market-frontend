import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { 체크_기본_흰색 } from '@constants/icons';

interface CheckboxProps {
  size?: number;
}

export const Checkbox = styled.input<CheckboxProps>`
  width: 24px;
  height: 24px;
  margin: 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${colors.white};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  background-clip: content-box;
  border: 2px solid ${colors.gray007};
  appearance: none;

  &:checked {
    border: none;
    background-color: ${colors.key002};
    background-image: url(${체크_기본_흰색});
  }
`;
