# News App

## Overview

News App delivers curated headlines from global and local sources with a focus on quick discovery and personalization. The interface surfaces top stories, category-focused feeds, and bookmarked articles so readers can stay informed without context switching across multiple outlets.

## Features

- Global, local, and category-specific feeds pulled from World News API and Knowivate aggregations.
- Search experience that filters stories by keyword, language, and country.
- Bookmark workspace for saving articles to read later.
- Country picker and front-page view tailored to regional preferences.
- Optimistic, cached data loading powered by React Query for a responsive UI.

## Tech Stack

- React 19 + Vite + TypeScript
- Material UI for theming and responsive layout
- React Router for page-level navigation
- TanStack Query (`@tanstack/react-query`) for data fetching and caching
- Axios for HTTP requests
- Zustand for lightweight global state

## Getting Started

### Prerequisites

- Node.js 18 or later
- Yarn (recommended, because the repository includes `yarn.lock`)
- World News API key (or compatible service that respects the `x-api-key` header)

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/engineer-dilnawaz/news-react-app.git
   cd news-react-app
   ```
2. Install dependencies.
   ```bash
   yarn install
   ```
3. Configure environment variables.
   Create a `.env` file in the project root and provide your API key:
   ```bash
   VITE_NEWS_API=your_world_news_api_key
   ```

### Running Locally

- Start the development server:
  ```bash
  yarn dev
  ```
- Build for production:
  ```bash
  yarn build
  ```
- Preview the production build:
  ```bash
  yarn preview
  ```
- Lint the codebase:
  ```bash
  yarn lint
  ```

## Project Structure

```
src/
  api/           # Axios instances, endpoints, and service wrappers
  components/    # Reusable UI components (cards, pickers, navigation)
  hooks/         # React Query hooks for fetching news collections
  pages/         # Page-level routed views (Home, Search, Bookmarked, etc.)
  store/         # Zustand slices for shared client state
  constants/     # App-wide constants, env accessors, and configuration
  utils/         # Formatting helpers (dates, links, flags)
```

## Architecture Notes

- Requests to `https://api.worldnewsapi.com` use an `x-api-key` header set from `VITE_NEWS_API`.
- `QueryClient` provides day-long caching to minimize redundant requests while navigating.
- The UI is themed with Material UI’s dark mode baseline and relies on the `CountryPicker` overlay for quick context switching.
- Global selections (country, category) are stored in Zustand slices to keep components declarative and avoid prop drilling.

## Contributing

1. Fork and create a feature branch.
2. Commit changes with clear messages.
3. Run `yarn lint` plus `yarn build` before submitting a pull request.
4. Document any new environment variables or configuration changes.

## License

This project is provided for educational purposes.
