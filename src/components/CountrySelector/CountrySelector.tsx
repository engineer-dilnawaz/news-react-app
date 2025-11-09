import { Avatar, Box, Chip, Tooltip } from "@mui/material";

import { generateFlag } from "../../utils";
import { useCountrySelector } from "./useCountrySelector";

export const CountrySelector = () => {
  const { selectedCountry, handleOpen } = useCountrySelector();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        mr: 2,
        maxWidth: 300,
      }}
      onClick={handleOpen}
    >
      <Tooltip arrow placement="auto" title="Select a country">
        <Chip
          avatar={
            <Avatar alt={selectedCountry.name} variant="circular">
              {generateFlag(selectedCountry.code)}
            </Avatar>
          }
          label={selectedCountry.name}
          variant="outlined"
        />
      </Tooltip>
    </Box>
  );
};
