export declare function createItemClasses(
  paramArray: (string | number)[], 
  classPrefix: string, 
  viewports: string[]
): (string | undefined)[];

export declare function createColumnClasses(
  columnSizes: (string | number)[], 
  viewports: string[]
): (string | undefined)[];

export declare function createOffsetClasses(
  offsetSizes: (string | number)[], 
  viewports: string[]
): (string | undefined)[];

export declare function generateItemClasses(
  columnSizes: (string | number)[],
  offsetSizes: (string | number)[],
  viewports: string[]
): string;

export declare function generateRowClasses(
  viewports: string[],
  options?: {
    flex?: boolean;
    flush?: boolean;
    rtl?: boolean;
  }
): string;