import Button from '@components/@shared/Button';
import Icon from '@components/@shared/Icon';
import Accordion from '@components/Accordion';
import Tabs from '@components/Tabs';
import { useCallback, useState } from 'react';
import * as S from './styles';
import useCategoryListQuery from '@pages/MarketPage/queries/useCategoryList';
import { useSearchParams } from 'react-router-dom';

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

type GoodsCategoryType = {
  category: string;
  subCategory: {
    type: string;
    goods: string[];
  }[];
};

const BottomSheet = ({ isOpen, onClose }: BottomSheetProps) => {
  const { data: categories } = useCategoryListQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category')?.split(',') || []
  );

  const onClickCloseButton = useCallback(() => {
    onClose();
  }, [onClose]);

  const onClickSearchCategoryButton = useCallback(() => {
    searchParams.set('category', selectedCategories.join(','));
    setSearchParams(searchParams);
    onClickCloseButton();
  }, [onClickCloseButton, searchParams, selectedCategories, setSearchParams]);

  const handleCategoryChange = useCallback(
    (category: string) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories((prevSelected) =>
          prevSelected.filter((c) => c !== category)
        );
      } else {
        setSelectedCategories((prevSelected) => [...prevSelected, category]);
      }
    },
    [selectedCategories]
  );

  return (
    <S.BottomSheetContainer>
      <S.Dimmer onClick={onClickCloseButton}></S.Dimmer>

      <S.SheetWrapper isOpen={isOpen}>
        <S.SheetHeader>
          <S.SheetTitle>카테고리</S.SheetTitle>
          <Icon name="닫기_기본_회색" size={24} onClick={onClickCloseButton} />
        </S.SheetHeader>
        {categories && (
          <Tabs
            tabs={categories?.map(
              ({ category, subCategory }: GoodsCategoryType) => ({
                id: category,
                label: category,
                contents: (
                  <Accordion
                    subCategory={subCategory}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                  />
                ),
              })
            )}
          />
        )}
        <S.SheetButtonWrapper>
          <Button
            label={selectedCategories.length === 0 ? '선택 하기' : '선택 완료'}
            disabled={selectedCategories.length === 0}
            onClickHandler={onClickSearchCategoryButton}
          />
        </S.SheetButtonWrapper>
      </S.SheetWrapper>
    </S.BottomSheetContainer>
  );
};

export default BottomSheet;
