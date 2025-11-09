import { useSelectedCountry, useCountrySelect } from "../../store";

export const useCountrySelector = () => {
  const { selectedCountry } = useSelectedCountry((state) => state);
  const { open, setOpen } = useCountrySelect((state) => state);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { selectedCountry, open, handleOpen, handleClose };
};
