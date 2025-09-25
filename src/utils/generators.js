import { COLUMNS, ROW, GRID } from '../core/index.js';
import { findViewportColumns, convertDeclaration } from './calculations.js';

/**
 * Creates a CSS class name for a specific viewport and parameter
 * @param {string|number} param - The parameter value
 * @param {string} viewport - The viewport identifier
 * @param {string} classPrefix - The CSS class prefix
 * @returns {string|undefined} The generated CSS class name or undefined
 */
function createSingleItemClass(param, viewport, classPrefix) {
  if (!param) {
    return undefined;
  }

  const viewportColumns = findViewportColumns(viewport);
  if (!viewportColumns) {
    return undefined;
  }

  const suffix = convertDeclaration(param, viewportColumns);
  return `${classPrefix}${COLUMNS.SEP}${viewport}${COLUMNS.SEP}${suffix}`;
}

/**
 * Creates CSS classes for multiple parameters across viewports
 * @param {Array<string|number>} paramArray - Array of parameters
 * @param {string} classPrefix - The CSS class prefix to use
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @returns {Array<string|undefined>} Array of generated CSS class names
 */
export function createItemClasses(paramArray, classPrefix, viewports) {
  if (!Array.isArray(paramArray) || paramArray.length === 0) {
    return [];
  }

  return paramArray.map((param, index) => 
    createSingleItemClass(param, viewports[index], classPrefix)
  );
}

/**
 * Creates column CSS classes
 * @param {Array<string|number>} columnSizes - Array of column sizes
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @returns {Array<string|undefined>} Array of column CSS class names
 */
export function createColumnClasses(columnSizes, viewports) {
  return createItemClasses(columnSizes, COLUMNS.COLUMN_CLASS_PREFIX, viewports);
}

/**
 * Creates offset CSS classes
 * @param {Array<string|number>} offsetSizes - Array of offset sizes
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @returns {Array<string|undefined>} Array of offset CSS class names
 */
export function createOffsetClasses(offsetSizes, viewports) {
  return createItemClasses(offsetSizes, COLUMNS.OFFSET_CLASS_PREFIX, viewports);
}

/**
 * Generates a complete CSS class string combining columns and offsets
 * @param {Array<string|number>} columnSizes - Array of column sizes
 * @param {Array<string|number>} offsetSizes - Array of offset sizes
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @returns {string} Space-separated CSS class string
 */
export function generateItemClasses(columnSizes, offsetSizes, viewports) {
	console.log('generateItemClasses called with:', {
		columnSizes,
		offsetSizes,
		viewports
	});
	
	const columnClasses = createColumnClasses(columnSizes, viewports);
	const offsetClasses = createOffsetClasses(offsetSizes, viewports);
	
	console.log('Generated classes:', {
		columnClasses,
		offsetClasses
	});
	
	const allClasses = [...columnClasses, ...offsetClasses]
		.filter(Boolean); // Remove undefined/null values
	
	const result = allClasses.join(' ');
	console.log('Final class string:', result);
	
	return result;
}

/**
 * Generates row container CSS classes with modifiers
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @param {Object} options - Row configuration options
 * @param {boolean} options.flex - Whether to use flex modifier
 * @param {boolean} options.flush - Whether to use flush modifier
 * @param {boolean} options.rtl - Whether to use RTL modifier
 * @returns {string} Space-separated CSS class string
 */
export function generateRowClasses(viewports, { flex = false, flush = false, rtl = false } = {}) {
  // Determine the base modifier
  const baseModifier = flush ? ROW.MODIFIERS.FLUSH : flex ? ROW.MODIFIERS.FLEX : '';
  
  // Add RTL modifier if needed
  const fullModifier = rtl ? baseModifier + ROW.MODIFIERS.RTL : baseModifier;
  
  // Generate classes for each viewport
  const rowClasses = viewports.map(viewport => {
    const modifierSuffix = fullModifier ? ROW.SEP + fullModifier : '';
    return `${ROW.CLASS_PREFIX}${ROW.SEP}${viewport}${modifierSuffix}`;
  });
  
  return rowClasses.join(' ');
}

/**
 * Generates grid container CSS classes with modifiers
 * @param {Array<string>} viewports - Array of viewport identifiers
 * @param {Array<string|number>} cols - Array of column configurations for each viewport
 * @param {Object} options - Grid configuration options
 * @param {boolean} options.spaced - Whether to use spaced modifier
 * @returns {string} Space-separated CSS class string
 */
export function generateGridClasses(viewports, cols, { spaced = false } = {}) {
  if (!Array.isArray(cols) || cols.length === 0) {
    return '';
  }

  // Generate classes for each viewport/column pair
  const gridClasses = cols.map((col, i) => {
    const viewport = viewports[i];
    if (!col || !viewport) {
      return undefined;
    }

    const baseCol = col.toString().toLowerCase();
    const modifierSuffix = spaced ? '--' + GRID.MODIFIERS.SPACED : '';
    const suffix = `${baseCol}${modifierSuffix}`;
    
    return `${GRID.CLASS_PREFIX}${GRID.SEP}${viewport}${GRID.SEP}${suffix}`;
  }).filter(Boolean); // Remove undefined values

  return gridClasses.join(' ');
}