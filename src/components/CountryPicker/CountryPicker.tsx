import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { generateFlag } from "../../utils";
import { useCountryPicker } from "./useCountryPicker";

export const CountryPicker = () => {
  const {
    countriesList,
    handleClose,
    open,
    handleSelect,
    isSelected,
    search,
    setSearch,
  } = useCountryPicker();
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

      <Box sx={{ px: 2 }}>
        <TextField
          name="search"
          label="Search Country"
          type="text"
          variant="standard"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Box>

      <Divider />

      <List
        sx={{
          pt: 0,
          display: "flex",
          flexWrap: "wrap",
          mt: 3,
          gap: 1,
        }}
      >
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
