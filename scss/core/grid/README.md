# PLACE Framework Grid Modules

This directory contains individual grid modules that can be imported explicitly.

Each grid module is self-contained and can be imported independently of other grid types.

## Usage Options

### Option 1: Import All Grid Types

```scss
// Import all grid types (default, flex, offset, css-grid)
@use 'place/grid';
```

### Option 2: Configure Specific Grid Types

```scss
// Import only specific grid types
@use 'place/grid' with (
  grid-types: (flex, css-grid)
);
```

### Option 3: Import Individual Grid Modules Directly

```scss
// Import only the grid types you need
@use 'place-framework/scss/grid/default';
@use 'place-framework/scss/grid/css-grid';
@use 'place-framework/scss/grid/flex';
```

### Option 4: Manual Grid Application

```scss
// Import no grid types, then apply them manually
@use 'place/grid' with (
  grid-types: ()
);
@use 'mixins/grid' as grid;
@include grid.apply-grid-type(flex);
```

These approaches give you granular control over what gets included in your final CSS, allowing you to optimize file size and performance by including only the grid types you need.

## Available Grid Types

- `default`: Float-based grid system (traditional)
- `flex`: Flexbox-based grid system
- `offset`: Grid offset functionality
- `css-grid`: CSS Grid implementation

## Example

See `scss/examples/grid-configuration.scss` for a complete example of how to configure grid types.