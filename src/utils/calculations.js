import { COLUMNS, VIEWPORTS } from '../core/index.js';

/**
 * Converts a percentage value to decimal
 * @param {number} percentage - The percentage value to convert
 * @returns {number} The decimal equivalent
 */
export function convertPercentageToDecimal(percentage) {
  return percentage / 100;
}

/**
 * Checks if a parameter represents a single column count
 * @param {string|number} param - The parameter to check
 * @returns {boolean} True if it's a single digit column count
 */
export function isSingleColumnCount(param) {
  return param.toString().length === 1;
}

/**
 * Finds the viewport key that matches a given descriptor
 * @param {string} viewportDescriptor - The viewport identifier to match
 * @returns {string|undefined} The matching viewport key or undefined
 */
export function findViewportKey(viewportDescriptor) {
  return Object.keys(VIEWPORTS).find(key => 
    VIEWPORTS[key] === viewportDescriptor
  );
}

/**
 * Gets the column count for a specific viewport
 * @param {string} viewportDescriptor - The viewport identifier
 * @returns {number|undefined} The number of columns for the viewport
 */
export function findViewportColumns(viewportDescriptor) {
  const viewportKey = findViewportKey(viewportDescriptor);
  return viewportKey ? COLUMNS.COUNT[viewportKey] : undefined;
}

/**
 * Finds a named fraction that matches a given decimal value
 * @param {number} targetValue - The decimal value to match
 * @returns {string|undefined} The matching fraction name or undefined
 */
export function findMatchingFraction(targetValue) {
  const fractionKey = Object.keys(COLUMNS.FRACTIONS).find(key => {
    const fractionValue = parseFloat(COLUMNS.FRACTIONS[key]);
    const difference = Math.abs(fractionValue - targetValue);
    // Use a small epsilon for floating-point comparison
    return difference < 0.0001;
  });
  
  return fractionKey ? fractionKey.toLowerCase() : undefined;
}

/**
 * Calculates the appropriate fraction value based on input type
 * @param {string|number} userParam - The user input parameter
 * @param {number} viewportColumns - The number of columns for the viewport
 * @returns {number} The calculated fraction value
 */
export function calculateFractionValue(userParam, viewportColumns) {
  const numericParam = Number(userParam);
  
  return isSingleColumnCount(userParam) 
    ? numericParam / viewportColumns
    : convertPercentageToDecimal(numericParam);
}

/**
 * Converts user input to a CSS class suffix
 * @param {string|number} userParam - The user input (column count or percentage)
 * @param {number} viewportColumns - The number of columns for the viewport
 * @returns {string} The CSS class suffix
 */
export function convertDeclaration(userParam, viewportColumns) {
  if (!userParam || !viewportColumns) {
    return '';
  }

  const fractionValue = calculateFractionValue(userParam, viewportColumns);
  const namedFraction = findMatchingFraction(fractionValue);
  
  return namedFraction || `${userParam}${COLUMNS.COL_SEP}${viewportColumns}`;
}