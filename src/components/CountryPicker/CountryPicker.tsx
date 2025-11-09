import {
  Avatar,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { generateFlag } from "../../utils";
import { useCountryPicker } from "./useCountryPicker";

export const CountryPicker = () => {
  const { countriesList, handleClose, open, handleSelect, isSelected } =
    useCountryPicker();
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          padding: 0,
          margin: 0,
          paddingInline: 2,
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color="primary">Select Country</Typography>

        <Typography variant="caption" color="textSecondary">
          {countriesList.length} countries
        </Typography>
      </DialogTitle>
      <Divider />

      <List sx={{ pt: 0, display: "flex", flexWrap: "wrap", mt: 1, gap: 1 }}>
        {countriesList.map((country) => (
          <ListItem
            key={country.code}
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
              backgroundColor: isSelected(country)
                ? "rgba(255, 255, 255, 0.08)"
                : "transparent",
            }}
            onClick={() => handleSelect(country)}
          >
            <ListItemAvatar>
              <Avatar>{generateFlag(country.code)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={country.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
