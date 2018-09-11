BOLT SCSS Framework Documentation
====

## Table of Contents

* [Introduction](#introduction)
* [Implementation](#implementation)
* [Ethos](#ethos)
* [Variable Configuration](#variable-configuration)
* [Functions](#functions)
* [Modules](#modules)
* [Grid](#grid)
* [Examples](#examples)
* [Acknowledgements](#acknowledgements)

## Introduction

The premise of BOLT is to have a truly modular and customizable CSS framework with minimal markup, devoid of combing through the core for manipulation. This package contains all the core files that are effectively inserted into your development environment.

## Implementation

BOLT is meant to be utilized with a task runner of your choice (Gulp, Grunt, Webpack etc.) by lieu of the `includePaths` option in any of the SASS libraries (e.g `gulp-sass`). Include the path in your task before final compilation output.

## Starter Kit
For a starter kit utilizing Gulp, check out the [BOLT Framework Starter](https://github.com/Woodbolt-International/bolt-framework-starter).

## Ethos

### Placeholders

BOLT is built pretty much entirely on placeholder classes. This allows us to `@extend` such classes to, of course, create our utility classes, while also giving us the flexibility of extending the same class to a custom class name you define. This helps us avoid the constraints of a typical `@extend` use case, and keep our classes isolated of any style creep.

**Source:** [https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/](https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/)

### Modularity

You should see that classes are separated based on what they bring to the table, and it is encouraged that you resume this mode of coding throughout your project. For instance, for a heading that may need to be pushed to the right, one might use the following markup:

```html
<h3 class="primary-heading align-right">
    This is a heading that is floating right.
</h3>   
```

The class `primary-heading` is your primary heading, while `align-right` text-aligns to the right. Consider, however, if we applied the style of `align-right` to the `primary-heading` class. We would then be pigeonholed to that alignment every time we called the heading. Keeping these classes separated allows us to remain flexible in development. 

### Descriptive Class Names

Each class name should be descriptive and quietly tell any developer new to the project what a class is doing. This is achieved through the following methods:

#### Naming

The name of a class should be descriptive and concise enough to describe its function. There's no reason to name have a protracted class name if it creates more keystrokes. For example, `align-right` vs `text-align-right`, a difference of 5 characters each time it's used.

#### OOCSS / BEM

A now established concept, but foreign to a good number of developers, object-oriented CSS displays the relationship of a class by using element and modifier suffixes. Consider the class `.is-hidden-sm`. A seasoned developer will know immediately that this is a hide of some sort in a smaller viewport. While BOLT doesn't employ this for all classes, it is encouraged you leverage this style throughout your project.

**Source:** [https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

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

Class template patterns are an exciting feature of BOLT. This will allow you to tailor the output without digging into the core. Patterns utilize the `template-class` function to create a pattern that makes sense for you(r build).

* B - Base
* V - Viewport
* P - Partial
* T - Total
* M - Modifier

#### Example 1
```css
$quick-css-grid-gap-pattern: "B-T--M";

```

Example Output: `.grid-quarters--gapped`

#### Example 2
```css
$grid-column-width-pattern: "B-V-PofT";

```

Example Output: `.col-md-3of4`


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

The type scale to be used on the entire site. The keys are used for classes in a loop, so `.inch-text` would output to an equivalent of 72px.

```css
$type-scale: (
    inch-text: 56,
    canon-text: 42,
    paragon-text: 30,
    primer-text: 24,
    tertia-text: 18,
    normal-text: 16,
    petite-text: 12,
    minion-text: 10
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

#### Input Static Width Map

Set pixel specific widths for inputs. Keys are the class suffixes, while the values are the associated width(s).

```css
$input-static-widths: (
    xxxs: 30,
    xxs: 50,
    xs: 100,
    s: 175,
    m: 250,
    l: 350
);
```

## Functions

### Pixel Equivalents

Takes px values in relation to `$base-text-size` and converts them to em units.

**How to call function:** `px(integer)`

## Modules

Modules are small additions to the framework that aren't necessary to the framework, but helpful in many scenarios.

### Embeds

This leverages a container to wrap around your `embed`, `video`, or `iframe` to respond to the viewport accordingly.

#### Usage

```html
<div class="embed-container">
    <iframe src="yoursourcehere.com">
</div>
```

### Transitions

A handful of cubic-bezier transitions in both variable and placeholder class format.

#### Usage
```css
// Placeholder Class Usage (All)
.element-one {
    opacity: 0.5;
    
    @extend %ease-in-out-expo;
    
    &:hover {
        opacity: 1;
        
        @extend %ease-in-out-expo;
    }
}   

// Variable Usage (User-Defined)
.element-one {
    opacity: 0.5;

    transition: opacity map-get($ease-in, circ);
}   
```

## Grid

### Intro
BOLT's grid system utilizes specific viewport targeting. This is to eliminate overrides, such as `!important`, and let the developer decide every single viewport they need the grid active. For example, let's consider a simple scenario where we need a 1/2 column layout in tablet and desktop only. 

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
`$total-columns`| 12
`$tablet-columns`| 9
`$mobile-columns`| 4
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
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.