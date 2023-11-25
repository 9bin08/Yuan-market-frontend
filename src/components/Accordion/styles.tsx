import styled from '@emotion/styled';
import { colors } from '@styles/colors';
import { Paragraph100Regular, Paragraph200SemiBold } from '@styles/typography';

export const AccordionContainer = styled.div`
  details[open] summary .arrow-icon {
    transform: rotate(180deg);
  }
`;

export const AccordionDetails = styled.details`
  box-sizing: border-box;
`;

export const AccordionSummary = styled.summary`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray001};

  ${Paragraph200SemiBold};
`;

export const AccordionContents = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const SummaryList = styled.li`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid ${colors.gray001};
`;

export const SummaryContents = styled.span`
  display: block;
  color: ${colors.text003};
  ${Paragraph100Regular}
`;
