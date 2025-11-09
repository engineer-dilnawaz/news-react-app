import { create } from "zustand";

import type { Category } from "../types";
import { CATEGORIES } from "../constants/data";

interface CategoryState {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

export const useSelectedCategory = create<CategoryState>((set) => ({
  selectedCategory: CATEGORIES[0],
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
