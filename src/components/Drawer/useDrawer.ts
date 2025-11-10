import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { useSelectedCategory } from "../../store";
import type { ExploreAppCategory, KnowivateCategory } from "../../types";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const { selectedCategory, setSelectedCategory } = useSelectedCategory(
    (state) => state
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

  const activePage = pathname?.toLowerCase() || "/";

  return {
    open,
    handleOpenDrawer,
    handleCloseDrawer,
    handleSelectCategory,
    handleExploreAppClick,
    activePage,
    selectedCategory,
  };
};
