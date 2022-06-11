import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export interface Data {
  inputValue: string;
  error: boolean;
  data: any;
  totalCount: number | null;
  title: string;
  nextPage: string | null;
  previousPage: string | null;
  getBooks: (e: SyntheticEvent) => void;
  goToNextPage: (e: SyntheticEvent) => void;
  goToPreviousPage: (e: SyntheticEvent) => void;
  setInputValue: Dispatch<SetStateAction<string>>;
  languages: string;
  setLanguages: Dispatch<SetStateAction<string>>;
}
