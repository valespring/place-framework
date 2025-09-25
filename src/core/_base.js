import { GRID_PATTERN_SEPARATOR, GRID_CLASS_SEPARATOR } from './_variables.js';

console.log('BASE Debug - Imported SCSS variables:', {
  GRID_PATTERN_SEPARATOR,
  GRID_CLASS_SEPARATOR
});

const baseObject = {
  EL: 'div',
  FRAC_SEP: GRID_PATTERN_SEPARATOR,
  SEP: GRID_CLASS_SEPARATOR
};

console.log('BASE Debug - Final base object:', baseObject);

export default baseObject;