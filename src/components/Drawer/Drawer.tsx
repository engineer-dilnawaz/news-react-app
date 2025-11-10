import { Fragment } from "react/jsx-runtime";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { ListSubheader } from "@mui/material";
import {
  EXPLORE_APP_CATEGORIES,
  KNOWIVATE_CATEGORIES,
} from "../../constants/data";
import { useDrawer } from "./useDrawer";

export function Drawer() {
  const {
    open,
    handleSelectCategory,
    handleOpenDrawer,
    handleCloseDrawer,
    handleExploreAppClick,
    activePage,
    selectedCategory,
  } = useDrawer();

  return (
    <Fragment>
      <Button onClick={handleOpenDrawer}>
        <MenuIcon
          sx={{
            fontSize: 30,
            cursor: "pointer",
          }}
          color="action"
        />
      </Button>
      <MuiDrawer
        anchor={"left"}
        open={open}
        onClose={handleCloseDrawer}
        sx={{ width: "auto" }}
      >
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Explore App
            </ListSubheader>
          }
        >
          {EXPLORE_APP_CATEGORIES.map((category) => (
            <ListItem
              key={category.value}
              disablePadding
              onClick={() => handleExploreAppClick(category)}
              sx={{
                cursor: "pointer",
                paddingInline: 2,
              }}
            >
              <ListItemButton
                selected={activePage === category.value?.toLowerCase()}
                sx={{
                  borderRadius: 1,
                  ...(activePage === category.value?.toLowerCase() && {
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }),
                }}
              >
                <ListItemText primary={category.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              News Categories
            </ListSubheader>
          }
        >
          {KNOWIVATE_CATEGORIES.map((category) => (
            <ListItem
              sx={{ cursor: "pointer", paddingInline: 2 }}
              key={category.value}
              disablePadding
            >
              <ListItemButton
                onClick={() => handleSelectCategory(category)}
                selected={selectedCategory.value === category.value}
                sx={{
                  borderRadius: 1,
                  ...(selectedCategory.value === category.value && {
                    bgcolor: "primary.main",
                    color: "white",
                  }),
                }}
              >
                <ListItemText primary={category.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </Fragment>
  );
}
