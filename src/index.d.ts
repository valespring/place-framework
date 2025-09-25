// TypeScript declarations for @place-framework/place-framework

// Base configuration types
export interface BaseConfig {
  EL: string;
  FRAC_SEP: string;
  SEP: string;
}

// Viewport configuration types
export interface ViewportConfig {
  LARGE: string;
  MEDIUM: string;
  SMALL: string;
  X_LARGE: string;
}

// Grid configuration types
export interface GridConfig {
  LARGE_COLUMNS: number;
  MEDIUM_COLUMNS: number;
  SMALL_COLUMNS: number;
  QUICK_GRID_WIDTHS: {
    full: number;
    half: number;
    third: number;
    quarter: number;
    fifth: number;
  };
}

// Props interface for Vue/React components
export interface ComponentProps {
  el: {
    type: StringConstructor;
    default: string;
  };
  viewports: {
    type: ArrayConstructor;
    default: () => string[];
  };
}

// Utility function types
export declare function generateItemClasses(
  cols: (string | number)[],
  offset: (string | number)[],
  viewports: string[]
): string;

export declare function generateRowClasses(
  viewports: string[],
  options?: {
    flex?: boolean;
    flushFlexItems?: boolean;
    ltr?: boolean;
    rtl?: boolean;
    full?: boolean;
    gap?: boolean;
  }
): string;

export declare function generateWrapperClasses(
  viewports: string[]
): string;

// Constants exports
export declare const BASE: BaseConfig;
export declare const VIEWPORTS: ViewportConfig;
export declare const GRID: GridConfig;
export declare const PROPS: ComponentProps;

// SCSS variables
export declare const SCSS_VARIABLES: {
  [key: string]: string | number;
};

// Default export
declare const PlaceFramework: {
  BASE: BaseConfig;
  VIEWPORTS: ViewportConfig;
  GRID: GridConfig;
  PROPS: ComponentProps;
  generateItemClasses: typeof generateItemClasses;
  generateRowClasses: typeof generateRowClasses;
  generateWrapperClasses: typeof generateWrapperClasses;
  SCSS_VARIABLES: typeof SCSS_VARIABLES;
};

export default PlaceFramework;