import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CountryPicker } from "./components";
import { AppWrapper } from "./components/AppWrapper/AppWrapper";
import { BookMarkedNews, Home, NewsFrontPage, SearchNews } from "./pages";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookmarked",
        element: <BookMarkedNews />,
      },
      {
        path: "/search",
        element: <SearchNews />,
      },
      {
        path: "/front-page",
        element: <NewsFrontPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <CountryPicker />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
