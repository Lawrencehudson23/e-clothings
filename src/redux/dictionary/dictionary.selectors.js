import { createSelector } from "reselect";

const selectDictionary = (state) => state.dictionary;
export const selectDictionarySections = createSelector(
  [selectDictionary],
  (dictionary) => dictionary.sections
);
