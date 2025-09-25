import { QUICK_GRID_WIDTHS } from './_variables.js';

// Use SCSS-exported fractions instead of hardcoded calculations
const BASE = {
  FULL: QUICK_GRID_WIDTHS.FULL,
  HALF: QUICK_GRID_WIDTHS.HALF,
  THIRD: QUICK_GRID_WIDTHS.THIRD,
  QUARTER: QUICK_GRID_WIDTHS.QUARTER,
  FIFTH: QUICK_GRID_WIDTHS.FIFTH
};

export default {
  BASE,
  PLURAL: {
    HALVES: BASE.HALF,
    THIRDS: BASE.THIRD,
    QUARTERS: BASE.QUARTER,
    FIFTHS: BASE.FIFTH
  }
};