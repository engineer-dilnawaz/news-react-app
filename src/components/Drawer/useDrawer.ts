import { useState } from "react";
import { useNavigate } from "react-router";

import { useSelectedCategory } from "../../store";
import type { ExploreAppCategory, KnowivateCategory } from "../../types";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const { setSelectedCategory } = useSelectedCategory((state) => state);
  const navigate = useNavigate();

  const handleOpenDrawer = () => setOpen(true);

  const handleCloseDrawer = () => setOpen(false);

  const handleSelectCategory = (category: KnowivateCategory) => {
    setSelectedCategory(category);
    handleCloseDrawer();
  };

  const handleExploreAppClick = (category: ExploreAppCategory) => {
    navigate(category.value);
    handleCloseDrawer();
  };

  return {
    open,
    handleOpenDrawer,
    handleCloseDrawer,
    handleSelectCategory,
    handleExploreAppClick,
  };
};
