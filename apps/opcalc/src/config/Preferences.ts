import DISPLAY_VALUE_TYPES from "../consts/DISPLAY_VALUE_TYPES";
import { CLOSE_PRICE_METHODS } from "../types/enums/CLOSE_PRICE_METHODS";
import { LEG_IV_METHOD } from "../types/enums/LEG_IV_METHOD";
import { MATRIX_YAXIS_TYPES } from "../types/enums/MATRIX_YAXIS_TYPES";
import { TIME_DECAY_BASIS } from "../types/enums/TIME_DECAY_BASIS";
import { COVERED_STRATEGIES } from "../types/enums/COVERED_STRATEGIES";
import { RESULTS_VISUALIZATION } from "../types/enums/RESULTS_VISUALIZATION";
import { LAYOUT_OPTIONS } from "../types/enums/LAYOUT_OPTIONS";
import { CHAIN_COLUMN_CHOICE } from "../types/enums/CHAIN_COLUMN_CHOICES";
import { type INPUT_METHODS } from "../types/enums/INPUT_METHODS";

export const PREFERENCES = {
  DEFAULT_INPUT_METHOD: <INPUT_METHODS>(
    (process.env.default_input_method || "default")
  ),
  DEFAULT_INPUT_METHOD_MOBILE: <INPUT_METHODS>(
    (process.env.default_input_method_mobile || "stacked")
  ),
  DEFAULT_LAYOUT: LAYOUT_OPTIONS.SIDE_BY_SIDE,
  DEFAULT_DISPLAY_VALUE_TYPE: DISPLAY_VALUE_TYPES.PL_DOLLARS,
  DEFAULT_CLOSE_PRICE_METHOD: CLOSE_PRICE_METHODS.MID,
  DEFAULT_MATRIX_YAXIS_TYPE: MATRIX_YAXIS_TYPES.DISTANCE_FROM_CURRENT,
  DEFAULT_LEG_IV_METHOD: LEG_IV_METHOD.STICKY_TO_SPOT,
  DEFAULT_TIME_DECAY_BASIS: TIME_DECAY_BASIS.CALENDAR_DAYS,
  DEFAULT_COVERED_STRATEGIES: COVERED_STRATEGIES.SHOW_CHANGE_IN_STOCK_VALUE,
  DEFAULT_RESULTS_VISUALIZATION: RESULTS_VISUALIZATION.MATRIX,
  DEFAULT_COLUMN_CHOICE: CHAIN_COLUMN_CHOICE.SIMPLE,
  MAX_RECENT_STOCKS: 5,
  MAX_RECENT_STRATEGIES: 5,
  DEFAULT_RECENT_STOCKS: ["SPY", "TSLA", "AAPL", "NIO", "PLTR"],
};
