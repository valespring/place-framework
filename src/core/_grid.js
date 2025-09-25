import BASE from './_base.js';
import CONVERSIONS from './_conversions.js';
import {
  GRID_GAP_MODIFIER,
  CSS_GRID_IDENTIFIER
} from './_variables.js';

export default {
  SEP: BASE.SEP,
  CLASS_PREFIX: CSS_GRID_IDENTIFIER,
  MODIFIERS: {
    SPACED: GRID_GAP_MODIFIER
  },
  FRACTIONS: CONVERSIONS.PLURAL
};