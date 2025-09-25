# PLACE Framework Structure Modules

This directory contains individual structure modules that can be imported explicitly.

Each structure module is self-contained and can be imported independently of other structure components.

## Usage

```scss
// Import only the structure components you need
@use 'place-framework/scss/structure/responsive-tables';
@use 'place-framework/scss/structure/containers';
```

This approach gives you more granular control over what gets included in your final CSS.