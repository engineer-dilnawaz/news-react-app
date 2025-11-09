import { useState } from "react";
import { useSelectedCategory } from "../../store";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const { setSelectedCategory } = useSelectedCategory((state) => state);

  const handleOpenDrawer = () => setOpen(true);

  const handleCloseDrawer = () => setOpen(false);

  return { open, handleOpenDrawer, handleCloseDrawer, setSelectedCategory };
};
