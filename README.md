BOLT CSS Framework Documentation
====

## Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Task Runner Configuration](#task-runner-configuration)
* [Task Runner Commands](#task-runner-commands)
* [Folder Structure](#folder-structure)
* [Ethos](#ethos)
* [Variable Configuration](#variable-configuration)
* [Functions](#functions)
* [Modules](#modules)
* [Grid](#grid)
* [Examples](#examples)
* [Acknowledgements](#acknowledgements)

## Introduction

The premise of BOLT is to have a truly modular and customizable CSS framework with minimal markup, devoid of combing through the core for manipulation. This is achieved in a variety of ways, allowing you to develop faster than ever before.

BOLT is developed with Object Oriented CSS (OOCSS), when applicable, to give any developer a good understanding of a class' function at a quick glance. 

## Installation

### Requirements

Name                       | Description
------------------------------|------------------------------
[Xcode](https://developer.apple.com/xcode/)| Used to view differences in code; also used in some variations of iconfont generation.
[node-js](https://www.nodejs.org)| Allows access to the Node Package Manager (NPM) for dependencies and gulp install.
[Gulp](https://gulpjs.com/)| Automates workflow and handles all of BOLT's tasks.

### Quick Install
While the above is the bare minimum needed to work within BOLT, here is a quick way to install everything you need through the command line.

1. Install XCode. `xcode-select --install`
2. Install Brew. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
`
3. Install Node. `brew install node`
4. Install Gulp. `npm install -g grunt-cli`

### Package Install
After you have all the requirements installed, simply run `npm install` inside your project folder to load in all necessary packages.


## Task Runner Configuration

BOLT uses Gulp to run the tasks within. However, instead of everything being contained within one file, they are separated to keep the project tidy.

### Gulp File

**Location:** `Gulpfile.js`

The main Gulp file. This is where we tasks are loaded and set.

### Gulp Config
**Location:** `gulp-config.js`

The configuration for the project. This is where boolean and path variables for the project are located.

Variable                      | Description
------------------------------|------------------------------
`config.sourcemaps`| Set to `true` to include sourcemaps.
`config.production`| Set to `true` to minify all output and remove comments.

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

## Task Runner Commands

Command                       | Description
------------------------------|------------------------------
`gulp`| Compiles SCSS and JS with the active configuration variables.
`gulp js`| Compiles JS with the active configuration variables.
`gulp iconfont`| Generates font files from SVG files within a folder, along with appropriate mixins and classes with the active configuration variables.
`gulp watch`| Watches for changes in .scss and .js files and effectively runs the appropriate tasks.

## Folder Structure

BOLT's Folder Structure is setup in an effort to keep everything separated by its function. Import partials are prefaced with an underscore.

    + scss
        + config
        + content
        + forms
        + helpers
        + interactive
        + layout
        + mixins
        + modules
        + normalize
        + site
        + type
        - _vars.less
        - _config.scss
        - _functions.scss
        - global.scss
        - global-fixed.scss
        
        

## Ethos

### Modularity

You should see that classes are separated based on what they bring to the table, and it is encouraged that you resume this mode of coding throughout your project. For instance, for a heading that may need to be pushed to the right, one might use the following markup:

```html
<h3 class="primary-heading align-right">
    This is a heading that is floating right.
</h3>   
```

The class `.primary-heading` is your primary heading, while `align-right` text-aligns to the right. Consider, however, if we applied the style of `align-right` to the `primary-heading` class. We would then be pigeonholed to that alignment every time we called the heading. Keeping these classes separated allows us to remain flexible in development. 

### Descriptive Class Names

Each class name should be descriptive and quietly tell any developer new to the project what a class is doing. This is achieved through the following methods:

#### Naming

Literally - just the name of a class should be descriptive and concise enough to describe its function. There's no reason to name have a protracted class name if it creates more keystrokes. For example, `align-right` vs `text-align-right`, a difference of 5 characters each time it's used.

#### OOCSS / BEM

A now established concept, but foreign to a good number of developers, object-oriented CSS displays the relationship of a class by using element and modifier suffixes. Consider the class `.is-hidden--sm`. A seasoned developer will know immediately that this is a hide of some sort in a smaller viewport. While BOLT typically only uses modifier suffixes because of its light weight, it is encouraged you leverage this style throughout your project.

**Source:** [https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

### Harder Working CSS Classes

There are a few selectors written to target multiple instances of that class to keep the CSS clean and concise. For example, consider these two examples:

#### Example 1

```css
[class*="gcd"] {
    display:inline;
    float:left;
}
```

#### Example 2
```css
.gcd-1of5, .gcd-1of4, .gcd-1of3, .gcd-1of2, .gcd-3of5, .gcd-3of4, .gcd-2of3, .gcd-7of10 {
    display: inline;
    float:left;
}   

```

As you can see, there's already a big discrepancy between both examples when it comes to achieving the same result (that's not even all of the desktop classes). While single class targeting may be (marginally) faster, we opt for the attribute targeting class to keep our CSS much smaller.

**Source:** [https://24ways.org/2012/a-harder-working-class/](https://24ways.org/2012/a-harder-working-class/)

## Variable Configuration

### Boolean Activation

There's a handful of boolean variables that affect the final output of your CSS file. Set these to `true` or `false` depending on what your project needs.

Variable                       | Description
------------------------------|------------------------------
`$grid-flex`| Set to `true` to have the option of flex grids.
`$grid-ie-fallback`| Set to `true` to have flex fallback for older browsers (IE). Recommended if `grid-flex` is true.
`$grid-offset`| Set to `true` to have offset grid classes.
`$viewport-helpers`| Set to `true` to have specific viewport utility classes, such as `is-hidden-lg` to hide something in a large viewport, or `float-left--sm` to float left only in a small viewport.
`$flex-helpers`| Set to `true` to have flex helpers for `display:flex` or `flex-grow`.
`$spacing-helpers`| Set to `true` to have spacing helpers to quickly add margin or padding to an element. Recommended, at least at the beginning of a project.
`$type-color-helpers`| Set to `true` to activate helper classes like `white-text` from the map `type-quick-colors`.

### Single Variable Strings

A handful of variables interpolate with the mixins and functions created, allowing the variables you set in the configuration to simply output with your change in place.

Variable                       | Default | Description
------------------------------|------------|------------------
`$grid-prefix`| "g"| The prefix for *all* row and column classes to indicate that it's associated with the grid.
`$grid-offset-prefix`|  "os"| The prefix for an offset column class.
`$grid-column-infix`| "c" | The infix that indicates that it's a column class within a row.
`$grid-column-prefix`| "gc" | A combination of the `grid-prefix` and `grid-column-infix` by default, this prefixes the grid column class.
`$grid-width-separator`| "of"| This goes in between the numerator and denominator in width class generation.
`$grid-row-suffix`| "row"| Shows that it's a row. Makes sense.
`$grid-flex-suffix`| "flex"| Flexbox suffix attached to a row to activate flexible layout(s).
`$grid-flush-suffix`| "flush"| The suffix attached to the end of a row to eliminate column padding for a flush grid.
`$grid-viewport-desktop-infix`| "d"| Indicates that it applies to the desktop viewport only.
`$grid-viewport-tablet-infix`| "t"| Indicates that it applies to the tablet viewport only.
`$grid-viewport-mobile-infix`| "m"| Indicates that it applies to the tablet viewport only.
`$font-path`| "/fonts"| Path for your custom fonts. Used for interpolation in the font-face mixin.
`$wrapper-name`| "container"| The name of the main class that centers and wraps the content horizontally.

### SASS Maps
Variable maps make it simple to view the relationship of a variable under one umbrella. Like the single variable strings, changing part or all of the variable will output your changes upon compilation.

#### Typographic Scale

The type scale to be used on the entire site. The keys are used for classes in a loop, so `.inch-text` would output to an equivalent of 72px.

```css
$type-scale: (
   inch-text: 72,
    canon-text: 38,
    paragon-text: 30,
    primer-text: 24,
    tertia-text: 18,
    normal-text: 14,
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
$helper-breakpoint-suffix: (
    #{$small-screens-max}: 'sm',
    #{$medium-screens-only}: 'md',
    #{$large-screens-min}: 'lg'
);
```

#### Vertical Rhythm Map

Used in line-height mixins to maintain vertical rhythm. They are essentially quick calls that are used to round off vertical distance.

```css
$rhythm-map: (
    quarter: 4,
    third: 3,
    half: 2
);
```

#### Quick Grid Map
Used with the flex grid option, the quick grid is the suffix appended to the end of a row to determine width. For example, `.gd__flex--quarters` will create 4 items in the desktop viewport.

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

#### Descendant Selectors 

This is used in the flex quick grid, and will target only these elements (so we don't have to use the expensive `*` selector).

```css
$descendant-selectors: (
    section,
    li,
    div
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

**How to call function:** `px(value)`

### String Replace

Searches for a string of a specified value and replaces it with another.

**How to call function:** `str-replace($string, $search, $replace)`

## Modules

Modules are small additions to the framework that aren't necessary to the framework, but helpful in many scenarios.

### Embeds

This leverages a container to wrap around your `embed`, `video`, or `iframe` to respond to the viewport accordingly.

### Keyframes

Set keyframes here via the mixin.

### Transitions

A handful of cubic-bezier transitions in both variable and placeholder class format.

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

### Grid Options

Active Variables                     | Default
------------------------------|------------------------------
`$grid-prefix`| "g"
`$grid-offset-prefix`| "os"
`$grid-column-infix`| "c"
`$grid-column-prefix`| "gc"
`$grid-width-separator`| "of"
`$grid-row-suffix`| "row"
`$grid-flex-suffix`| "flex"
`$grid-flush-suffix`| "flush"
`$grid-viewport-desktop-infix`| "d"
`$grid-viewport-tablet-infix`| "t"
`$grid-viewport-mobile-infix`| "m"


### Grid Generation

#### Rows

Row generation combines the grid prefix, the viewport infix, and the grid row suffix. Rows are made to contain the column classes and floats therein.



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
`$grid-offset-prefix`| 'os'
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

## Examples

*Note: These examples utilize the default variables, and represent the majority of use cases, not totality.*

### Default Grid

```html
<div class="gd-row gt-row gm-row">
    <div class="gcd-quarter gct-third gcm-half">
        <div>
            Item 1
        </div>
    </div>
    <div class="gcd-quarter gct-third gcm-half">
        <div>
            Item 2
        </div>
    </div>
    <div class="gcd-quarter gct-third gcm-half">
        <div>
            Item 3
        </div>
    </div>
    <div class="gcd-quarter gct-third gcm-half">
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
<div class="gd-row--rtl gt-row--rtl">
    <div class="gcd-quarter gct-third">
        <div>
            Item 3
        </div>
    </div>
    <div class="gcd-quarter gct-third">
        <div>
            Item 2
        </div>
    </div>
    <div class="gcd-quarter gct-third">
        <div>
            Item 1
        </div>
    </div>
</div>
```

#### Description

A reverse grid layout. Every item has variable width in every viewport *(Desktop: 25%, Tablet: 33%, Mobile: 100%)*. However, in desktop and tablet viewports, floats are reversed resulting in this order visually: Item 1, Item 2, Item 3.

### Flex Grid

```html
<div class="gd-row__flex gt-row__flex gm-row__flex">
    <div class="gcd-quarter gct-quarter gcm-half">
        <div>
            Item 1
        </div>
    </div>
    <div class="gcd-quarter gct-quarter gcm-half">
        <div>
            Item 2
        </div>
    </div>
    <div class="gcd-quarter gct-quarter gcm-half">
        <div>
            Item 3
        </div>
    </div>
    <div class="gcd-quarter gct-quarter gcm-half">
        <div>
            Item 4
        </div>
    </div>
</div>
```

#### Description

Similar to the default grid, the flex grid eliminates floats and utilizes flexbox to set the grid. *(Desktop: 25%, Tablet: 25%, Mobile: 50%)*.


### Flex Quick Grid

```html
<ul class="gd__flex--thirds gt__flex--thirds gm__flex--halves">
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

A quick grid that only requires a class on the parent selector and targets any immediate child element in `$descendant-selectors`. *(Desktop: 33%, Tablet: 33%, Mobile: 50%)*.

### Flex Flush Grid

```html
<ul class="gd-row__flex--flush gt-row__flex--flush gm-row__flex--flush">
    <li class="gd-quarter gt-quarter gm-half">
        <div class="flex-grow">
            Item 1
        </div>
    </li>
    <li class="gd-quarter gt-quarter gm-half">
        <div class="flex-grow">
            Item 2
        </div>
    </li>
    <li class="gd-quarter gt-quarter gm-half">
        <div class="flex-grow">
            Item 3
        </div>
    </li>
    <li class="gd-quarter gt-quarter gm-half">
        <div class="flex-grow">
            Item 4
        </div>
    </li>
</ul>
```

#### Description

A flex grid layout without padding or gutters, resulting in each grid column to be flush. Apply the class of `flex-grow` (if `$flex-helpers` is `true`) to have the item grow to fit within the container. *(Desktop: 25%, Tablet: 25%, Mobile: 50%)*.
                        
## Acknowledgements

Thanks to the following developers to make this project a reality.

* [SASS](http://sass-lang.com/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Gulp](https://gulpjs.com/)
* [OOCSS](https://github.com/stubbornella/oocss)
* [BEM](http://bem.info/method/)
* [Modernizr](http://modernizr.com)
* [Responsive Comments](http://responsivecomments.com/)