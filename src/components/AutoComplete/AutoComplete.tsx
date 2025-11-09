import { Autocomplete, Box, TextField } from "@mui/material";

type Named = { name: string };

type AutoCompleteProps<T> = {
  options: T[];
  search: string;
  setSearch: (search: string) => void;
};

export const AutoComplete = <T extends Named>({
  options,
  search,
  setSearch,
}: AutoCompleteProps<T>) => {
  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <Autocomplete
        options={options}
        autoHighlight
        sx={{ maxWidth: 300, width: "100%" }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              {...optionProps}
            >
              {option.name}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                autoComplete: "new-password",
              },
            }}
          />
        )}
      />
    </Box>
  );
};
