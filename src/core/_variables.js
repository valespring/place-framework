// Import SCSS variables from the framework's export system
import * as scssVariables from '@place/variables/_export.scss?js';

// Add logging to debug SCSS variable imports
console.log('SCSS Variables imported:', scssVariables);
console.log('Available keys:', Object.keys(scssVariables));

// Helper function to get SCSS variable with fallback
export const getScssVar = (key, fallback = null) => scssVariables[key] || fallback;

// Destructure and export individual constants
export const {
  'grid-row-identifier': GRID_ROW_IDENTIFIER,
  'grid-column-identifier': GRID_COLUMN_IDENTIFIER,
  'grid-offset-identifier': GRID_OFFSET_IDENTIFIER,
  'css-grid-identifier': CSS_GRID_IDENTIFIER,
  'grid-pattern-separator': GRID_PATTERN_SEPARATOR,
  'grid-class-separator': GRID_CLASS_SEPARATOR,
  'grid-flex-modifier': GRID_FLEX_MODIFIER,
  'grid-flex-flush-modifier': GRID_FLEX_FLUSH_MODIFIER,
  'grid-ltr-modifier': GRID_LTR_MODIFIER,
  'grid-rtl-modifier': GRID_RTL_MODIFIER,
  'grid-full-modifier': GRID_FULL_MODIFIER,
  'grid-gap-modifier': GRID_GAP_MODIFIER,
  'wrapper-name': WRAPPER_NAME,
  'viewport-x-large-identifier': VIEWPORT_X_LARGE_IDENTIFIER,
  'viewport-large-identifier': VIEWPORT_LARGE_IDENTIFIER,
  'viewport-medium-identifier': VIEWPORT_MEDIUM_IDENTIFIER,
  'viewport-small-identifier': VIEWPORT_SMALL_IDENTIFIER,
  'large-columns': LARGE_COLUMNS,
  'medium-columns': MEDIUM_COLUMNS,
  'small-columns': SMALL_COLUMNS,
  'full': SCSS_FULL,
  'half': SCSS_HALF,
  'third': SCSS_THIRD,
  'quarter': SCSS_QUARTER,
  'fifth': SCSS_FIFTH
} = scssVariables;

// Create the quick grid widths object for backward compatibility
export const QUICK_GRID_WIDTHS = {
  FULL: SCSS_FULL,
  HALF: SCSS_HALF,
  THIRD: SCSS_THIRD,
  QUARTER: SCSS_QUARTER,
  FIFTH: SCSS_FIFTH
};

// Export both the raw object and the individual variables
export default scssVariables;