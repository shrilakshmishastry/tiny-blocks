import { ObjectKeys } from "@/utils";

export const views = {
  /**
   * week view on the calendar
   */
  WEEK: "WEEK",
  /**
   * day view of the
   */
  DAY: "DAY",
  /**
   *
   */
  MONTH: "MONTH",
} as const;

export type ViewsType = ObjectKeys<typeof views>;
