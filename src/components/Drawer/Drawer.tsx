import { Fragment } from "react/jsx-runtime";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { CATEGORIES } from "../../constants/data";
import { useDrawer } from "./useDrawer";

export function Drawer() {
  const { setSelectedCategory, open, handleOpenDrawer, handleCloseDrawer } =
    useDrawer();

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
      <MuiDrawer anchor={"left"} open={open} onClose={handleCloseDrawer}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >
          <ListItem alignItems="center" divider>
            <ListItemText primary={"All Categories"} />
          </ListItem>
          <List>
            {CATEGORIES.map((category) => (
              <ListItem key={category.value} disablePadding>
                <ListItemButton onClick={() => setSelectedCategory(category)}>
                  <ListItemText primary={category.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MuiDrawer>
    </Fragment>
  );
}
