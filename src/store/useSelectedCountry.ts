import { create } from "zustand";

import { COUNTRIES } from "../constants/data";
import type { Country } from "../types";

interface CountryState {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
}

export const useSelectedCountry = create<CountryState>((set) => ({
  selectedCountry:
    COUNTRIES.filter((country) => country.code === "pk")[0] || COUNTRIES[0],
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
