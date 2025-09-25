
![PLACE Framework Header](https://raw.githubusercontent.com/valespring/place-framework/master/docs/logo-header.gif?sanitize=true)

<p align="center">
<img src="https://img.shields.io/github/languages/code-size/valespring/place-framework?style=flat-square">

<a href="https://www.npmjs.com/package/place-framework" target="_blank">
    <img src="https://img.shields.io/npm/v/@place-framework/place-framework?style=flat-square">
</a>

<a href="https://prettier.io" target="_blank">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

<a href="https://opensource.org/licenses/MIT" rel="nofollow">
    <img src="https://img.shields.io/npm/l/@place-framework/place-framework?style=flat-square">
</a>
</p>



PLACE SCSS Framework Documentation
====

## Table of Contents

* [Introduction](#introduction)
* [Implementation](#implementation)
* [Discovery System](#discovery-system)
* [Vertical Rhythm](#vertical-rhythm)
* [JavaScript Integration](#javascript-integration)
* [Ethos](#ethos)
* [Variable Configuration](#variable-configuration)
* [Functions](#functions)
* [Modules](#modules)
* [Grid](#grid)
* [Examples](#examples)
* [Import Types](#import-types)
* [Subsets](#subsets)
* [Acknowledgements](#acknowledgements)

## Introduction

The premise of PLACE is to have a truly modular and customizable CSS framework with minimal markup, devoid of combing through the core for manipulation. This package contains all the core files that are effectively inserted into your development environment.

## Implementation

PLACE is meant to be utilized with a task runner of your choice (Gulp, Grunt, Webpack etc.) by lieu of the `includePaths` option in any of the SASS libraries (e.g `gulp-sass`). Include the path in your task before final compilation output.

## Discovery System

PLACE Framework includes a built-in discovery system to help developers easily find and use available utilities, mixins, and functions.

### Usage

Run the discovery command to see all available framework files:

```bash
npm run discovery
```

This will output a clean list of all framework files organized by category with their import statements:

```
## CONFIG
@use '~@place/core/config/typography' as typography;
@use '~@place/core/config/colors' as colors;
@use '~@place/core/config/grid' as grid;

## MIXINS  
@use '~@place/core/mixins/vertical-rhythm' as rhythm;
@use '~@place/core/mixins/typography' as typography;
@use '~@place/core/mixins/grid' as grid;

## FUNCTIONS
@use '~@place/core/functions/typography' as typography;
@use '~@place/core/functions/math' as math;
```

### Available Categories

- **config**: Configuration files (colors, typography, grid settings, etc.)
- **functions**: Utility functions (math, typography parsing, etc.)
- **mixins**: Reusable mixins (vertical rhythm, typography, grid, etc.)
- **grid**: Grid system files (CSS Grid, Flexbox, default grid)
- **helpers**: Helper utilities (alignment, spacing, presentation)
- **typography**: Typography-related files (hierarchy, font-face, styles)
- **normalize**: CSS normalization files

## Vertical Rhythm

PLACE Framework now includes an advanced vertical rhythm system based on the Crasman methodology for consistent baseline alignment.

### Features

- **Responsive Rhythm**: Different baseline calculations per viewport
- **Automatic Calculation**: Uses actual line-height values from your type scale
- **CSS Custom Properties**: Runtime flexibility with `--vertical-rhythm`
- **Rem-based**: All calculations properly converted to rem units

### Typography Scale with Line Heights

Define your typography scale with optional line-height values:

```scss
$type-scale: (
    inch-type: 56_72,    // 56px font with 72px line-height
    canon-type: 42,      // 42px font with golden ratio line-height
    paragon-type: (
        lg: 32_48,       // Responsive: 32px/48px in large viewport
        md: 28_32,       // 28px/32px in medium viewport
        sm: 24_28        // 24px/28px in small viewport
    ),
    normal-type: 16_30,  // 16px font with 30px line-height
    petite-type: 14,
    minion-type: 12
);
```

### Vertical Rhythm Mixins

Use the vertical rhythm mixins for consistent spacing:

```scss
@use '~@place/core/mixins/vertical-rhythm' as rhythm;

.my-element {
    @include rhythm.rhythm-margin-block-start(2);    // 2 rhythm units top margin
    @include rhythm.rhythm-padding-block(1);         // 1 rhythm unit padding
    @include rhythm.rhythm-margin-block-end(0.5);    // 0.5 rhythm units bottom margin
}
```

### CSS Custom Properties

The framework automatically generates CSS custom properties for vertical rhythm:

```css
:root {
    --vertical-rhythm: 1.875rem; /* Calculated from 16_30 = 30px ÷ 16px */
    --golden-ratio: 1.618;
}
```

## JavaScript Integration

PLACE Framework provides JavaScript utilities for dynamic class generation and access to SCSS variables.

### SCSS Variables Export

Framework variables are automatically exported to JavaScript via CSS `:export`:

```javascript
import variables from '@place-framework/place-framework/scss/variables/_export.scss';

// Access SCSS variables in JavaScript
console.log(variables.gridRowIdentifier);        // "row"
console.log(variables.gridColumnIdentifier);     // "col"
console.log(variables.largeColumns);             // "12"
console.log(variables.viewportLargeIdentifier);  // "lg"
```

### Available Exported Variables

- **Grid Identifiers**: `grid-row-identifier`, `grid-column-identifier`, `css-grid-identifier`
- **Column Counts**: `large-columns`, `medium-columns`, `small-columns`
- **Viewport Identifiers**: `viewport-large-identifier`, `viewport-medium-identifier`, `viewport-small-identifier`
- **Grid Modifiers**: `grid-flex-modifier`, `grid-gap-modifier`, `grid-full-modifier`
- **Quick Grid Widths**: All values from `$quick-grid-widths` map

### JavaScript Class Generators

Generate CSS classes dynamically using the JavaScript utilities:

```javascript
import { 
    generateItemClasses, 
    generateRowClasses, 
    generateGridClasses 
} from '@place-framework/place-framework';

// Generate column and offset classes
const itemClasses = generateItemClasses(
    ['half', 'third', 'quarter'],  // Column sizes
    ['quarter', null, null],       // Offset sizes  
    ['lg', 'md', 'sm']            // Viewports
);
// Result: "col-lg-half col-md-third col-sm-quarter os-lg-quarter"

// Generate row classes with modifiers
const rowClasses = generateRowClasses(
    ['lg', 'md', 'sm'], 
    { flex: true, rtl: false }
);
// Result: "row-lg--flex row-md--flex row-sm--flex"

// Generate CSS Grid classes
const gridClasses = generateGridClasses(
    ['lg', 'md', 'sm'],
    ['quarters', 'thirds', 'halves'],
    { spaced: true }
);
// Result: "grid-lg-quarters--gapped grid-md-thirds--gapped grid-sm-halves--gapped"
```

### Available Generator Functions

- **`generateItemClasses(columnSizes, offsetSizes, viewports)`**: Generate column and offset classes
- **`generateRowClasses(viewports, options)`**: Generate row container classes with modifiers
- **`generateGridClasses(viewports, cols, options)`**: Generate CSS Grid classes
- **`createColumnClasses(columnSizes, viewports)`**: Generate only column classes
- **`createOffsetClasses(offsetSizes, viewports)`**: Generate only offset classes

## Ethos

### Placeholders

PLACE is built pretty much entirely on placeholder classes. This allows us to `@extend` such classes to, of course, create our utility classes, while also giving us the flexibility of extending the same class to a custom class name you define. This helps us avoid the constraints of a typical `@extend` use case, and keep our classes isolated of any style creep.

**Source:** [https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/](https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/)

### Harder Working CSS Classes

There are a few selectors written to target multiple instances of that class to keep the CSS clean and concise. For example, consider these two examples:

#### Example 1

```css
[class*="grid-lg"] {
    display: grid;
}
```

#### Example 2
```css
.grid-lg-quarters, .grid-lg-quarters--gapped, .grid-lg-thirds, .grid-lg-thirds--gapped, .grid-lg-halves, .grid-lg-halves--gapped {
    display: grid;
}   

```

As you can see, there's already a large discrepancy between both examples when it comes to achieving the same result. While single class targeting may be (marginally) faster, we opt for the attribute targeting class to keep our CSS much smaller and concise.

**Source:** [https://24ways.org/2012/a-harder-working-class/](https://24ways.org/2012/a-harder-working-class/)

## Variable Configuration

### Boolean Activation

There's a handful of boolean variables that affect the final output of your CSS file. Set these to `true` or `false` depending on what your project needs.

Variable                       | Description
------------------------------|------------------------------
`$default-grid`| Set to `true` to utilize the default grid with floats. 
`$css-grid`| Set to `true` to utilize css grid. By default, quick grid classes are created, and placeholder classes are created to extend within your file(s).
`$flex-grid`| Set to `true` to have the option of spaced and flush flex grids.
`$grid-ie-fallback`| Set to `true` to have flex fallback for older browsers (IE). Recommended if `grid-flex` or `css-grid` is true.
`$offset-grid`| Set to `true` to have offset grid classes.
`$wysiwyg-type`| Set to `true` to utilize the WYSIWYG scale from the variable map.
`$viewport-helpers`| Set to `true` to have specific viewport utility classes, such as `is-hidden-lg` to hide something in a large viewport, or `float-left-sm` to float left only in a small viewport.
`$flex-helpers`| Set to `true` to have flex helpers for `display:flex` or `flex-grow`.
`$spacing-helpers`| Set to `true` to have spacing helpers to quickly add margin or padding to an element. Recommended, at least at the beginning of a project.
`$type-color-helpers`| Set to `true` to activate helper classes like `white-text` from the map `type-quick-colors`.

### Class Template Patterns

Class template patterns are an exciting feature of PLACE. This will allow you to tailor the output without digging into the core. Patterns utilize parameter-based placeholders to create patterns that make sense for your build.

* `{base}` - Base component name (row, col, wrapper, etc.)
* `{viewport}` - Viewport breakpoint (xs, sm, md, lg, xl, etc.)
* `{modifier}` - Modifier/variant (flex, rtl, flush, etc.)
* `{partial}` - Partial fraction (1, 2, 3, etc.)
* `{total}` - Total fraction (2, 3, 4, 12, etc.)

#### Example 1
```css
$quick-css-grid-gap-pattern: '{base}-{total}--{modifier}';
```

Example Output: `.grid-quarters--gapped`

#### Example 2
```css
$grid-column-width-pattern: '{base}-{viewport}-{partial}of{total}';
```

Example Output: `.col-md-3of4`

#### Available Patterns

```css
// Row & Wrap Class Patterns
$grid-row-pattern: '{base}-{viewport}';                    // → row-lg
$grid-orientation-pattern: '{base}-{viewport}-{modifier}'; // → row-lg--flex
$flex-grid-row-pattern: '{base}-{viewport}-{modifier}';    // → row-lg-flex

// CSS Grid Patterns
$css-grid-wrapper-pattern: '{base}-{viewport}';                    // → wrapper-lg
$quick-css-grid-wrapper-pattern: '{base}-{total}';                 // → wrapper-12
$quick-css-grid-gap-pattern: '{base}-{total}--{modifier}';         // → wrapper-12--gap

// Column Patterns
$grid-column-pattern: '{base}-{viewport}';                         // → col-lg
$grid-column-width-pattern: '{base}-{viewport}-{partial}of{total}'; // → col-lg-3of12
$grid-concise-column-width-pattern: '{base}-{viewport}-{modifier}'; // → col-lg-half

// Offset Patterns
$grid-offset-pattern: '{base}-{viewport}-{partial}of{total}';      // → offset-lg-3of12
$grid-quick-offset-pattern: '{base}-{viewport}-{total}';           // → offset-lg-3

// Spacing Patterns
$spacing-class-pattern: '{base}{total}{modifier}';                 // → m4t (margin-4-top)
```


### Variable Declaration

A handful of variables interpolate with the mixins and functions created (including the aforementioned template class patterns), allowing the variables you set in the configuration to simply output with your change in place.

Variable                       | Default | Description
------------------------------|------------|------------------
`$grid-row-identifier`| "row"| Identifier for grid rows.
`$grid-column-identifier`| "col"| Identifier for columns.
`$grid-offset-identifier`| "os"| Identifier for offsets utilizing left margin.
`$css-grid-identifier`| "grid"| Identifier for CSS grid.
`$grid-viewport-desktop-identifier`| "lg"| Viewport identifier for large screens.
`$grid-viewport-tablet-identifier`| "md"| Viewport identifier for medium screens.
`$grid-viewport-mobile-identifier`| "sm"| Viewport identifier for small screens.
`$grid-flex-modifier`| "flex"| Identifier for flex grids.
`$grid-flex-flush-modifier`| "flush"| Modifier for flex grids, but with no gutters.
`$grid-ltr-modifier`| "ltr"| Modifier for a default grid float orientation from left to right.
`$grid-rtl-modifier`| "rtl"| Modifier for a default grid float orientation from right to left.
`$grid-full-modifier`| "full"| Modifier for a full width element.
`$grid-gap-modifier`| "spaced"| Modifier for a CSS grid with grid-gap.


### SASS Maps
Variable maps make it simple to view the relationship of a variable under one umbrella. Like the single variable strings, changing part or all of the variable will output your changes upon compilation.

#### Typographic Scale

The type scale to be used on the entire site. The keys are used for classes in a loop, so `.inch-text` would output to an equivalent of 72px. You can now include line-height values using underscore notation:

```css
$type-scale: (
    inch-type: 56_72,    // 56px font with 72px line-height
    canon-type: 42,      // 42px font with golden ratio line-height
    paragon-type: (
        lg: 32_48,       // Responsive: 32px/48px in large viewport
        md: 28_32,       // 28px/32px in medium viewport
        sm: 24_28        // 24px/28px in small viewport
    ),
    primer-type: 24,
    tertia-type: 18,
    normal-type: 16_30,  // 16px font with 30px line-height
    petite-type: 12,
    minion-type: 10
);
```

#### Typographic Weights

The different type weights to be used in your project. This is important because some fonts are especially heavy, so set your weights here to eliminate unused weights. These will generate placeholder and actual classes for you to use, such as `.light-weight`.

```css
$type-weights: (
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700
);
```
#### Typographic Text Color Helpers

Color helpers to use if `$type-color-helpers` is `true`. Keys are the actual class names, while the value is the associated color. Therefore, `.black-text` would be  - you guessed it, black.

```
$type-quick-colors: (
    black-text: $black,
    white-text: $white
);
```

#### WYSWIYG (Blog) Scale

Use the keys from `$type-scale` to set the heading size values, so we can `@extend` the style and not create a redundancy.

```css
$wysiwyg-scale: (
    h1: canon-text,
    h2: paragon-text,
    h3: primer-text,
    h4: normal-text,
    h5: petite-text,
    h6: minion-text
);
```

#### Helper Breakpoint Suffixes

If `$viewport-helpers` is `true`, these are the suffixes attached to the helpers with modifier BEM syntax for each query. The value corresponds to the media query variable that it will be active there within.

```css
$helper-breakpoints: (
    #{$small-screens-max}: 'sm',
    #{$medium-screens-only}: 'md',
    #{$large-screens-min}: 'lg'
);
```

#### Type Helper Breakpoints
If `$type-viewport-helpers` is `true`, viewport specific sizing will be accessible through the way of classes. For example, for `tertia-text` in mobile, the class would be `.tertia-text-sm`.


```css
$type-helper-breakpoints: (
    #{$small-screens-max}: 'sm',
    #{$medium-screens-min}: 'md'
);
```

#### Quick Grid Map
Used with the flex grid option, the quick grid is the suffix appended to the end of a row to determine width. For example, `.grid-lg-quarters` will create 4 items in the desktop viewport.

```css
$quick-grid-map: (
    quarters: 4,
    thirds: 3,
    halves: 2
);
```

#### Extended Width Map
Extends widths to quick classes, so you can use different classes other than the numbered defaults. For example, `third` can be utilized in addition to `1of3` if desired.

```css
$quick-grid-widths: (
    fifth: 1/5,
    three-quarters: 3/4,
    quarter: 1/4,
    third: 1/3,
    two-thirds: 2/3,
    half: 1/2
);
```


## Functions

### Math Functions

The framework includes several math utility functions:

```scss
@use '~@place/core/functions/math' as math;

$em-value: math.px(24);        // Convert 24px to em units
$power: math.power(2, 3);      // Calculate 2^3 = 8
$sqrt: math.square-root(16);   // Calculate √16 = 4
$number: math.number('24');    // Convert string '24' to number 24
```

### Typography Functions

New typography functions for parsing font sizes and line heights:

```scss
@use '~@place/core/functions/typography' as typography;

// Parse underscore-separated font size and line-height values
$font-size: typography.get-type-size('16_24');      // Returns 16
$line-height: typography.get-line-height('16_24');  // Returns 24
$rem-value: typography.px-to-rem(24);               // Returns calc(24 / 16)

// Parse any underscore value by index
$first: typography.parse-underscore-value('56_72', 1);  // Returns 56
$second: typography.parse-underscore-value('56_72', 2); // Returns 72
```

## Modules

Modules are small additions to the framework that aren't necessary to the framework, but helpful in many scenarios.

### WYSIWYG

The WYSIWYG module provides consistent vertical rhythm spacing for content areas using the framework's vertical rhythm system. It dynamically generates spacing based on your type scale configuration.

#### Usage

```html
<div class="wysiwyg">
    <h1 class="canon-type">Main Heading</h1>
    <p>This paragraph will have proper spacing after the heading.</p>
    <h2 class="paragon-type">Subheading</h2>
    <p>Another paragraph with consistent rhythm.</p>
    <ul>
        <li>List items maintain rhythm</li>
        <li>Nested spacing is handled automatically</li>
    </ul>
</div>
```

#### Customization

The WYSIWYG module uses CSS custom properties for easy spacing customization:

```css
.wysiwyg {
    --rhythm-space-modifier: 1.2;        /* Increase all spacing by 20% */
    --rhythm-heading-large: 2.5;         /* More space after large headings */
    --rhythm-paragraph: 1.25;            /* Slightly more paragraph spacing */
    --rhythm-tight-after-heading: 0.25;  /* Tighter spacing after headings */
}
```

#### Available CSS Custom Properties

- `--rhythm-space-modifier`: Global spacing multiplier (default: 1)
- `--rhythm-heading-large`: Space after large headings (default: 2)
- `--rhythm-heading-medium`: Space after medium headings (default: 1.5)
- `--rhythm-heading-small`: Space after small headings (default: 1.25)
- `--rhythm-paragraph`: Paragraph spacing (default: 1)
- `--rhythm-list`: List spacing (default: 1)
- `--rhythm-blockquote`: Blockquote spacing (default: 1.5)
- `--rhythm-code`: Code block spacing (default: 1)
- `--rhythm-table`: Table spacing (default: 1.5)
- `--rhythm-media`: Image/figure spacing (default: 1.5)
- `--rhythm-hr`: Horizontal rule spacing (default: 2)
- `--rhythm-tight-after-heading`: Tight spacing after headings (default: 0.5)
- `--rhythm-nested-list`: Nested list spacing (default: 0.5)

### Embeds

This leverages a container to wrap around your `embed`, `video`, or `iframe` to respond to the viewport accordingly.

#### Usage

```html
<div class="embed-container">
    <iframe src="yoursourcehere.com">
</div>
```

## Grid

### Intro
PLACE's grid system utilizes specific viewport targeting. This is to eliminate overrides, such as `!important`, and let the developer decide every single viewport they need the grid active. For example, let's consider a simple scenario where we need a 1/2 column layout in tablet and desktop only. 

```html
<div class="row-lg row-md">
    <div class="col-lg-half col-md-half">
        Content 1
    </div>
    <div class="col-lg-half col-md-half">
        Content 2
    </div>
</div>
``` 

Knowing that `lg` stands for desktop, and `md` for tablet, we know immediately that anything containing those infixes only applies to those two viewports. This will allow the divs to stack normally (100%) in mobile (reverting to their default/initial styles) without any added markup or overrides.


### Grid Generation

#### Rows

Row generation combines the grid row identifer and the viewport identifier. Rows are made to contain the column classes and floats therein.



Viewport                 | Default Class
------------------------------|------------------------------
Desktop| `.row-lg`
Tablet| `.row-md`
Mobile| `.row-sm`

#### Columns

Column generation takes the grid column identifier and attaches the viewport identifier at the end.

Active Variables                     | Default
------------------------------|------------------------------
`$grid-column-identifier`| 'col'
`$grid-viewport-desktop-identifier`| 'lg'
`$grid-viewport-tablet-identifier`| 'md'
`$grid-viewport-mobile-identifier`| 'sm'

Viewport                | Default Class
------------------------------|------------------------------
Desktop| `[class*="col-lg"]`
Tablet| `[class*="col-md"]`
Mobile| `[class*="col-sm"]`

#### Widths

Widths are generated based off of the columns variable for that viewport, creating a simplified fraction useable class. For example, 4/12 columns would simplify to 1/3 columns.

Active Variables                     | Default
------------------------------|------------------------------
`$large-columns`| 12
`$medium-columns`| 9
`$small-columns`| 4
`$grid-viewport-desktop-identifier`| 'lg'
`$grid-viewport-tablet-identifier`| 'md'
`$grid-viewport-mobile-identifier`| 'sm'

Viewport                 | Default Classes
------------------------------|------------------------------
Desktop| `.lg-#{numerator}of12` `.col-lg-#{numerator}of12`
Tablet| `.md-#{numerator}of9` `.col-md-#{numerator}of9`
Mobile| `.sm-#{numerator}of4` `.col-sm-#{numerator}of4`

## Examples

*Note: These examples utilize the default variables, and represent the majority of use cases, not totality.*

### Default Grid

```html
<div class="row-lg row-md row-sm">
    <div class="col-lg-quarter col-md-third col-sm-half">
        <div>
            Item 1
        </div>
    </div>
    <div class="col-lg-quarter col-md-third col-sm-half">
        <div>
            Item 2
        </div>
    </div>
    <div class="col-lg-quarter col-md-third col-sm-half">
        <div>
            Item 3
        </div>
    </div>
    <div class="col-lg-quarter col-md-third col-sm-half">
        <div>
            Item 4
        </div>
    </div>
</div>
```

#### Description

A default grid example. Every item floats left but has variable width in every viewport *(Desktop: 25%, Tablet: 33%, Mobile: 50%)*.


### Default Grid (Reverse Order)

```html
<div class="row-lg--rtl row-md--rtl">
    <div class="col-lg-quarter col-md-third">
        <div>
            Item 3
        </div>
    </div>
    <div class="col-lg-quarter col-md-third">
        <div>
            Item 2
        </div>
    </div>
    <div class="col-lg-quarter col-md-third">
        <div>
            Item 1
        </div>
    </div>
</div>
```

#### Description

A reverse grid layout. Every item has variable width in every viewport *(Desktop: 25%, Tablet: 33%, Mobile: 100%)*. However, in desktop and tablet viewports, floats are reversed resulting in this order visually: Item 1, Item 2, Item 3.

### Default Grid Plus Offsets

```html
<div class="row-lg row-md">
    <div class="col-lg-half col-md-half os-lg-quarter os-md-quarter">
        <div>
            Item 1
        </div>
    </div>
    <div class="col-lg-quarter col-md-quarter">
        <div>
            Item 2
        </div>
    </div>
</div>
```

#### Description

Grid with offset classes. Every item floats left but has an offset margin on item 1. Notice that the width with offsets from ALL items totals 100%. *(Desktop: 50% width & 25% offset, Tablet: 50% & 25% offset, Mobile: 100% width)*.

### Flex Grid

```html
<div class="row-lg__flex row-md__flex row-sm__flex">
    <div class="col-lg-quarter col-md-quarter col-sm-half">
        <div>
            Item 1
        </div>
    </div>
    <div class="col-lg-quarter col-md-quarter col-sm-half">
        <div>
            Item 2
        </div>
    </div>
    <div class="col-lg-quarter col-md-quarter col-sm-half">
        <div>
            Item 3
        </div>
    </div>
    <div class="col-lg-quarter col-md-quarter col-sm-half">
        <div>
            Item 4
        </div>
    </div>
</div>
```

#### Description

Similar to the default grid, the flex grid eliminates floats and utilizes flexbox to set the grid. *(Desktop: 25%, Tablet: 25%, Mobile: 50%)*.

### Flex Flush Grid

```html
<ul class="row-lg__flush row-md__flush row-sm__flush">
    <li class="col-lg-quarter col-md-quarter col-sm-half">
        <div class="flex-grow">
            Item 1
        </div>
    </li>
    <li class="col-lg-quarter col-md-quarter col-sm-half">
        <div class="flex-grow">
            Item 2
        </div>
    </li>
    <li class="col-lg-quarter col-md-quarter col-sm-half">
        <div class="flex-grow">
            Item 3
        </div>
    </li>
    <li class="col-lg-quarter col-md-quarter col-sm-half">
        <div class="flex-grow">
            Item 4
        </div>
    </li>
</ul>
```

#### Description

A flex grid layout without padding or gutters, resulting in each grid column to be flush. Apply the class of `flex-grow` (if `$flex-helpers` is `true`) to have the item grow to stretch/grow within the container. *(Desktop: 25%, Tablet: 25%, Mobile: 50%)*.


### 'CSS Grid' Quick Grid

```html
<ul class="grid-lg-quarters grid-md-halves grid-sm-halves">
    <li>
        <div>
            Item 1
        </div>
    </li>
    <li>
        <div>
            Item 2
        </div>
    </li>
    <li>
        <div>
            Item 3
        </div>
    </li>
    <li>
        <div>
            Item 4
        </div>
    </li>
    <li>
        <div>
            Item 5
        </div>
    </li>
</ul>
```
                        
#### Description

A quick grid that only requires a class on the parent selector and targets any immediate child element in `$quick-grid-selectors`. *(Desktop: 25%, Tablet: 50%, Mobile: 50%)*.

### 'CSS Grid' Quick Spaced Grid

```html
<ul class="grid-lg-thirds--gapped grid-md-thirds--gapped grid-sm-halves--gapped">
    <li>
        <div>
            Item 1
        </div>
    </li>
    <li>
        <div>
            Item 2
        </div>
    </li>
    <li>
        <div>
            Item 3
        </div>
    </li>
    <li>
        <div>
            Item 4
        </div>
    </li>
    <li>
        <div>
            Item 5
        </div>
    </li>
</ul>
```
                        
#### Description

A quick grid like the above, but targets the `$grid-gap-modifier` to apply gutters for spacing. Note that the element must end with the modifier ( default: `--gapped` ) *(Desktop: 33%, Tablet: 33%, Mobile: 50%)*.

## Import Types

Each import is required unless otherwise noted.

`@import 'place-functions'`

Math and template functions utilized in the framework. 

`@import "place-mixins"`

Mixins utilized in the framework.

`@import "place-config"`

Default configuration variables. These can be overwritten in the configuration of your project. 

`@import "place-normalize"`

A modified version of normalize. Optional, but recommended.

`@import "place-placeholders"`

The placeholders of PLACE. Required for the core.

`@import "place-grid"`

Import only the place grid with no added features or modules.

`@import "place-core"`

The above with additional helpful modules and features: helper classes, type defaults, interactive/button defaults, responsive tables, transition placeholders, and a responsive container for iframe embeds. 

## Subsets

These are other tools that utilize the PLACE Framework.

* [PLACE Webpack Preset](https://www.npmjs.com/package/@place-framework/place-webpack-preset)
* [PLACE Starter Vue](https://www.npmjs.com/package/@place-framework/place-framework-starter-vue)
                        
## Acknowledgements

Thanks to the following developers to make this project a reality.

* [SASS](http://sass-lang.com/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [OOCSS](https://github.com/stubbornella/oocss)
* [BEM](http://bem.info/method/)

## License

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE