import { Paper } from "@mui/material";
import { AppLogo } from "../AppLogo";
import { CountrySelector } from "../CountrySelector";
import { Drawer } from "../Drawer";

export const Navbar = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        maxHeight: 70,
      }}
      square
    >
      <Drawer />
      <AppLogo />
      <CountrySelector />
    </Paper>
  );
};
