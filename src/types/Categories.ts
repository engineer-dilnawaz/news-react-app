import type {
  CATEGORIES,
  EXPLORE_APP_CATEGORIES,
  KNOWIVATE_CATEGORIES,
} from "../constants/data";

export type Category = (typeof CATEGORIES)[number];
export type KnowivateCategory = (typeof KNOWIVATE_CATEGORIES)[number];
export type ExploreAppCategory = (typeof EXPLORE_APP_CATEGORIES)[number];
