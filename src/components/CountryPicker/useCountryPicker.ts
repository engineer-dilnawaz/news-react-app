import { useState } from "react";

import { COUNTRIES } from "../../constants/data";
import { useSelectedCountry, useCountrySelect } from "../../store";
import type { Country } from "../../types";

export const useCountryPicker = () => {
  const { open, setOpen } = useCountrySelect((state) => state);
  const { selectedCountry, setSelectedCountry } = useSelectedCountry(
    (state) => state
  );
  const [search, setSearch] = useState("");

  const countriesList = [...COUNTRIES].filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setSearch("");
    setOpen(false);
  };

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    handleClose();
  };

  const isSelected = (country: Country) =>
    selectedCountry.code === country.code;

  return {
    countriesList,
    open,
    handleOpen,
    handleClose,
    handleSelect,
    search,
    setSearch,
    selectedCountry,
    isSelected,
  };
};
