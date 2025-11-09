import { Container, Typography } from "@mui/material";
import { useSelectedCategory, useSelectedCountry } from "../../store";
import { generateFlag } from "../../utils";

export const Home = () => {
  const { selectedCategory } = useSelectedCategory((state) => state);
  const { selectedCountry } = useSelectedCountry((state) => state);
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Typography variant="h3">
        {generateFlag(selectedCountry.code)} {selectedCountry.name}
      </Typography>
      <Typography variant="h6">{selectedCategory.label}</Typography>
    </Container>
  );
};
