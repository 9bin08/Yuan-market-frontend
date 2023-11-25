import Checkbox from '@components/@shared/Checkbox';
import Icon from '@components/@shared/Icon';
import * as S from './styles';
import { useMemo } from 'react';

type AccordionProps = {
  subCategory: {
    type: string;
    goods: string[];
  }[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
};

const Accordion = ({
  subCategory,
  selectedCategories,
  onCategoryChange,
}: AccordionProps) => {
  const isSelectedCategory = (type: string) =>
    selectedCategories.includes(type);

  const toggleCheckboxInput = (list: string) => {
    onCategoryChange(list);
  };

  const isCheckOpenDetails = useMemo(() => {
    return (goods: string[]) => {
      const hasIntersection = goods.some((item) =>
        selectedCategories.includes(item)
      );
      return hasIntersection;
    };
  }, []);

  return (
    <S.AccordionContainer>
      {subCategory.map(({ type, goods }) => (
        <S.AccordionDetails key={type} open={isCheckOpenDetails(goods)}>
          <S.AccordionSummary>
            {type}
            <Icon name="화살표_아래_회색" size={24} className="arrow-icon" />
          </S.AccordionSummary>
          <S.AccordionContents>
            {goods.map((list) => (
              <S.SummaryList key={list}>
                <Checkbox
                  id={list}
                  checked={isSelectedCategory(list)}
                  handler={() => toggleCheckboxInput(list)}
                />
                <S.SummaryContents>{list}</S.SummaryContents>
              </S.SummaryList>
            ))}
          </S.AccordionContents>
        </S.AccordionDetails>
      ))}
    </S.AccordionContainer>
  );
};

export default Accordion;
