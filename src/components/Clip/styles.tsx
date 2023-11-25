import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Paragraph100Regular } from '@styles/typography';

export const ClipContainer = styled.div`
  padding: 6px 12px;
  border-radius: 16px;
  border: 1px solid ${colors.key002};
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: ${colors.key002};

  ${Paragraph100Regular}
  img {
    cursor: pointer;
  }
`;
