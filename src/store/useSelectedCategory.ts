import { create } from "zustand";

import type { KnowivateCategory } from "../types";
import { KNOWIVATE_CATEGORIES } from "../constants/data";

interface CategoryState {
  selectedCategory: KnowivateCategory;
  setSelectedCategory: (category: KnowivateCategory) => void;
}

export const useSelectedCategory = create<CategoryState>((set) => ({
  selectedCategory: KNOWIVATE_CATEGORIES[0],
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
