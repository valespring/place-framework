BOLT CSS Framework Documentation
====

## Table of Contents

## Overview

The premise of BOLT is to have a truly modular and customizable framework with minimal markup, devoid of combing through the core for manipulation. This is achieved in a variety of ways, allowing you to develop faster than ever before.

BOLT is developed with Object Oriented CSS (OOCSS), when applicable, to give any developer a good understanding of a class' function at a quick glance. You should see that these classes are separated based on what they do, and it is encouraged that you resume this style throughout your project. For instance, for a main navigation with dropdown functionality, one might use the following markup: 

```html
<ul class="nav__dropdown nav__main">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>   
```

The class `.nav__dropdown` would house the function to initialize the dropdown, while `.nav__main` would carry the weight of all the visual styles. We do not clump everything under one class, such as `.nav__main`, so that all of our logic is clear, concise, and isolated to its own purpose.

## Folder Structure

    + scss
        + config
        + content
        + mixins
        + normalize
        + helpers
        + modules
        + type
        + interactive
        + forms
        + layout
        + site
        - _vars.less
        - _config.scss
        - global.scss
        - global-fixed.scss
        
        
## Install
* `npm install`

## Task Runner Configuration

BOLT uses Gulp to run the tasks within. However, instead of everything being contained within one file, they are separated to keep the project tidy.

### Gulp File

**Location:** `Gulpfile.js`

The main Gulp file. This is where we tasks are loaded and set.

### Gulp Config
**Location:** `gulp-config.js`

The configuration for the project. This is where variables for the project are located, in addition to the production variable, which minifies all your output files.

### Gulp Tasks
**Location:** `/gulp-tasks/*`

Each task is separated into their own file. This makes it simple to find and configure, for example, the `iconfont` task, if you wanted to change the output format(s).

### Dependencies

Classes                       | Description
------------------------------|------------------------------
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)| Autoprefixes CSS automatically to support more browsers.
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)| "Cleans" our CSS and minifies it if the `config.production` value is set to `true`.
[gulp-concat](https://www.npmjs.com/package/gulp-concat)| Concatenates our JS into a neat file.
[gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont)| Creates custom icon font files for us to reference.
[gulp-iconfont-css](https://www.npmjs.com/package/gulp-iconfont-css)| Creates CSS output for icons generated.
[gulp-if](https://www.npmjs.com/package/gulp-if)| Used to activate minification or sourcemaps through simple boolean activations in the `gulp-config.js` file.
[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)| Allows us to have all of our Gulp plugins from the `package.json` accessible across our Gulp workflow.
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)| 'Eats' the errors and continues watching files when an error occurs.
[gulp-require-tasks](https://www.npmjs.com/package/gulp-require-tasks)| Allows us to load Gulp tasks from the multiple individual files inside a defined directory.
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)| 'Eats' the errors and continues watching files when an error occurs.
[gulp-sass](https://www.npmjs.com/package/gulp-sass)| Kinda needed.
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)| Generates sourcemaps if `config.sourcemaps` is `true`.
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)| Used for minifying JS.
[gulp-watch](https://www.npmjs.com/package/gulp-watch)| For watching for changes in files.

## Grid

### Intro
BOLT's grid system relies on specific viewport targeting. This is to eliminate overrides, such as `!important`, and let the developer decide every single viewport they need the grid active. For example, let's consider a simple scenario where we need a 1/2 column layout in tablet and desktop only. 

```html
<div class="gd-row gt-row">
    <div class="gcd-half gct-half">
        Content 1
    </div>
    <div class="gcd-half gct-half">
        Content 2
    </div>
</div>
``` 

Knowing that `d` stands for desktop, and `t` for tablet, we know immediately that anything containing those infixes only applies to those two viewports. This will allow the divs to stack normally (100%) in mobile (reverting to their default/initial styles) without any added markup or overrides.

### Grid Generation

#### Rows

Row generation combines the grid prefix, the viewport infix, and the grid row suffix. Rows are made to contain the column classes and floats therein.

Active Variables                     | Default
------------------------------|------------------------------
`$grid-prefix`| 'g'
`$grid-row-suffix`| 'row'
`$grid-viewport-desktop-infix`| 'd'
`$grid-viewport-tablet-infix`| 't'
`$grid-viewport-mobile-infix`| 'm'

Viewport                 | Default Class
------------------------------|------------------------------
Desktop| `.gd-row`
Tablet| `.gt-row`
Mobile| `.gm-row`

#### Columns

Column generation takes the grid column prefix and attaches the viewport infix at the end.

Active Variables                     | Default
------------------------------|------------------------------
`$grid-prefix`| 'g'
`$grid-column-infix`| 'c'
`$grid-column-prefix`*| 'gc'
`$grid-viewport-desktop-infix`| 'd'
`$grid-viewport-tablet-infix`| 't'
`$grid-viewport-mobile-infix`| 'm'

Viewport                | Default Class
------------------------------|------------------------------
Desktop| `[class*="gcd"]`
Tablet| `[class*="gct"]`
Mobile| `[class*="gcm"]`

#### Widths

Widths are generated based off of the columns variable for that viewport, creating a simplified fraction useable class. For example, 4/12 columns would simplify to 1/3 columns.

Active Variables                     | Default
------------------------------|------------------------------
`$total-columns`| 12
`$tablet-columns`| 9
`$mobile-columns`| 4
`$grid-viewport-desktop-infix`| 'd'
`$grid-viewport-tablet-infix`| 't'
`$grid-viewport-mobile-infix`| 'm'

Viewport                 | Default Class
------------------------------|------------------------------
Desktop| `[class*="d-#{numerator}of12"]`
Tablet| `[class*="t-#{numerator}of9"]`
Mobile| `[class*="m-#{numerator}of4"]`

## Functions

### Pixel Equivalents

Takes px values in relation to `$base-text-size` and converts them to em units.

**How to call function:** `px(value)`


## Variable Configuration
 
Variables in BOLT are set up to encourage customization. This is achieved through three separate facets of the framework.

* Boolean activation
* Variable Interpolation
* SASS Variable Maps


```css
// Booleans
$grid-flex: true;

// Single Variables
$grid-prefix: "g";
$grid-column-infix: "c";
$grid-column-prefix: "#{$grid-prefix}#{$grid-column-infix}";

$grid-viewport-desktop-infix: 'd';
$grid-viewport-tablet-infix: 't';
$grid-viewport-mobile-infix: 'm';

// Variable Maps
$fraction-map: (
    fifth: 5,
    quarter: 4,
    third: 3,
    half: 2
);

```

### Boolean Activation
For example, `$grid-flex` is set to `true` by default if you need a grid variation that uses flexbox. However, maybe your project is simple in nature and doesn't need to utilize flexbox. Simply set to `false` and, upon compilation, will eliminate unused classes and reduce your overall CSS footprint.

### Single Variable Strings
A handful of variables interpolate with the mixins and functions created, allowing the variables you set in the configuration to simply output with your changes in place. For instance, the grid generates a column class based on the `$grid-column-prefix` plus the infix of the viewport. Therefore, assume we use `$grid-viewport-desktop-infix`. If we change `grid-column-prefix` to `col`, and change `$grid-viewport-desktop-infix` to 'lg', the grid will generate the CSS of `[class*="col-lg"]`.

### SASS Maps
Variable maps are an intriguing feature, since they make it simple to view the relationship of a variable under one umbrella. By default, the grid generates numbered classes based on the column count in that viewport. However, sometimes we can use quick widths that make sense, such as `-quarter` which is the same as `-1of4`.