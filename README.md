# NOT UI Kit

A lightweight, responsive UI Kit built using SCSS, HTML and TypeScript. This kit focuses on CSS Reset, Typography, Color System, light and dark modes, and browser compatibility across all platforms (mobile, web, desktop).

## Features

- Comprehensive CSS reset for consistent styling across browsers
- Responsive typography system with fallback fonts
- Extensive color system with utility classes for quick styling
- Light and dark mode support with automatic toggling
- Responsive design mixins for easy breakpoint management
- TypeScript support for type-safe JavaScript development
- Browser-specific styles for improved compatibility
- Prevention of forced dark mode by system preferences

## Installation

1. Clone the repository:
2. Install dependencies:
3. Build the project:

## Usage

1. Include the compiled CSS file in your HTML:
2. Import the TypeScript file in```

## Documentation

### CSS Reset

The `_reset.scss` file provides a comprehensive CSS reset, including:

- Box sizing normalization
- Margin and padding resets
- Font smoothing and text rendering optimizations
- Scroll behavior improvements
- Form element normalization
- Table style normalization

### Typography

The `_typography.scss` file defines:

- A custom font face for Inter with fallback fonts
- Responsive heading styles (h1-h6)
- Paragraph and link styles
- Browser-specific typography fixes

### Color System

The `_colors.scss` file introduces:

- Primary, secondary, text, background, accent, error, success, and warning colors
- Utility classes for quick text and background color application
- Dark mode support using CSS custom properties

### Responsive Design

Use the `@include respond-to($breakpoint)` mixin to create responsive styles: