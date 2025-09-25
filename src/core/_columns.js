import BASE from './_base.js';
import CONVERSIONS from './_conversions.js';
import {
  GRID_COLUMN_IDENTIFIER,
  GRID_OFFSET_IDENTIFIER,
  LARGE_COLUMNS,
  MEDIUM_COLUMNS,
  SMALL_COLUMNS
} from './_variables.js';

// Add logging to debug column constants
console.log('COLUMNS Debug - Imported variables:', {
	GRID_COLUMN_IDENTIFIER,
	GRID_OFFSET_IDENTIFIER,
	LARGE_COLUMNS,
	MEDIUM_COLUMNS,
	SMALL_COLUMNS
});
console.log('COLUMNS Debug - BASE object:', BASE);

// Match the column variables from the framework if redeclaring from defaults (e.g $large-columns, $medium-columns, $small-columns)
const columnsObject = {
	SEP: BASE.SEP,
	COL_SEP: BASE.FRAC_SEP,
	COLUMN_CLASS_PREFIX: GRID_COLUMN_IDENTIFIER,
	OFFSET_CLASS_PREFIX: GRID_OFFSET_IDENTIFIER,
	COUNT: {
		LARGE: LARGE_COLUMNS,
		MEDIUM: MEDIUM_COLUMNS,
		SMALL: SMALL_COLUMNS
	},
	FRACTIONS: CONVERSIONS.BASE
};

console.log('COLUMNS Debug - Final columns object:', columnsObject);

export default columnsObject;