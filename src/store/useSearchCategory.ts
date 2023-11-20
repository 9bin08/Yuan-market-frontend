import { withSelector } from './middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

export type itemsType = {
  title: string,
  price : string,
  thumbnail : string,
  discount : boolean,
  discountPrice :string,
  discountPercent : string
}

type searchKeywordState = {
  keyword: string;
  searchItems : itemsType[]
};

interface searchAction {
  setKeyword: (keyword: string) => void;
  setSearchItems: (items : itemsType[]) => void;
}

const searchKeywordStore = () => ({
  keyword: '',
  searchItems: [],
});

export const useSearchCategoryStore = create(persist(devtools<searchKeywordState>(searchKeywordStore, { name: 'searchKeywordStore' }), { name: 'searchKeyword' }));

export const useAuthAction = (): searchAction => ({
  setKeyword: (keyword) => {
    useSearchCategoryStore.setState({ keyword });
  },
  setSearchItems: (items) => {
    useSearchCategoryStore.setState({ searchItems: items });
  },
});

export const useSearchCategorySelector = withSelector(useSearchCategoryStore);
