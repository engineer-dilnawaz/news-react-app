import {
  Alert,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { NewsCard } from "../../components";
import { useLatestNews } from "../../hooks/useLatestNews";

export const Home = () => {
  const { latestNewsData, isLatestNewsLoading, latestNewsError } =
    useLatestNews();

  if (isLatestNewsLoading) {
    return (
      <Paper
        elevation={3}
        square
        variant="outlined"
        sx={{
          mt: 10,
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          height: 400,
          width: 400,
        }}
      >
        <CircularProgress
          enableTrackSlot
          size={40}
          thickness={2.5}
          variant="indeterminate"
          color="primary"
        />
        <Typography variant="h6" color="primary">
          Fetching news...
        </Typography>
      </Paper>
    );
  }

  if (latestNewsError) {
    return (
      <Paper
        elevation={3}
        square
        variant="outlined"
        sx={{
          mt: 4,
          marginInline: 4,
        }}
      >
        <Alert variant="outlined" severity="error">
          {latestNewsError.message}
        </Alert>
      </Paper>
    );
  }

  if (latestNewsData?.length === 0) {
    return (
      <Paper
        elevation={3}
        variant="outlined"
        sx={{
          mt: 4,
          marginInline: 4,
        }}
      >
        <Alert variant="standard" severity="info">
          No news found yet. Please try again later.
        </Alert>
      </Paper>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      {latestNewsData.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </Container>
  );
};
