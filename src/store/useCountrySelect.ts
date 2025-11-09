import { create } from "zustand";

interface CountrySelectState {
  open: boolean;
  setOpen: (country: boolean) => void;
}

export const useCountrySelect = create<CountrySelectState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
