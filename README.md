# Our React Project

## Installation

1. Create a new folder ready to receive the project
2. Import git repo inside for example with VSCode
3. Change directory to go to folder named "react-qx"
4. Run the following command in your terminal: `yarn run start`

## Introduction

React-Qx is my personal React environment to work. It's bootstrapped with Vite and uses Typescript as a programming language.

Here is the list of all the dependencies and frameworks used with this environment:

* React
* React-Dom
* React-Router-Dom
* React-Window (react-window and @types/react-window)
* Concurrently (concurrently)
* CLSX (clsx)
* PostCSS (postccs and postcss-cli) :
  * PostCSS Import (postcss-import)
  * PostCSS Utilities (postcss-utilities)
  * PostCSS Nested (postcss-nested)
  * CSS Nano (cssnano)
  * Preset ENV (postcss-preset-env)
  * PostCSS Mixins (postcss-mixins)
  * PostCSS Variables (postcss-simple-vars)
* Autoprefixer
* Material-UI (@mui/core, @mui/material, @mui/base, @mui/styles and @mui/joy)
* Emotion (@emotion/react and @emotion/styled)

### Development mode

To launch the development mode, just run the following command: `yarn run dev`

To see the CSS style changes in live, it's important to launch a new terminal and then execute the following command: `yarn run watch:css`.

## Structure

The general structure has been designed in order to organize our project in an atomic way (atoms < molecules < organisms < templates < pages) for allowing a better visibility of the functions of each element contained in our files.

* The "src/assets" directory for images and other static files to keep these assets separate from the main source code of the application.

* The "src/components" directory is a place to store the various reusable components that you will use in our application.

  * The "src/components/elements" directory contains components that are not directly related to the appearance of the application, but are often used in several different components. These elements could include form input components, buttons, icons, animations, authentication functions, HTTP request functions, etc.

  * The "src/components/templates" directory for page templates if we plan to reuse similar layouts across multiple pages.

  * The "src/components/layouts" directory for elements of general page structuring, such as headers, footers, sidebars, etc.

* The "src/pages" directory contain the components that represent the different pages of our application.

* The "src/routes" directory for routing configuration files to keep routing logic separate from the main application.

* The "src/styles" directory contain all of our application's style files, including the main CSS file.

## Dependencies

### React Window

The React Window module is a tool that makes it easier to render lists and grids of items in React applications. It is particularly useful for managing large amounts of elements efficiently, making only the elements visible on the screen.

### Concurrently

Concurrently is a command-line tool that allows running multiple commands simultaneously in a terminal. This can be useful when working on projects with multiple processes running concurrently, such as React projects with a development server and a build process. Concurrently allows you to start these processes at once and stop them all at once, avoiding the need to manually manage each process individually. It can also be used to run multiple scripts conditionally, for example to ensure that tests are run before building.

### CLSX

The CLSX module is a lightweight utility library for building strings of CSS classes dynamically in JavaScript applications. It makes it easy to add and remove CSS classes conditionally by combining multiple classes into a single string. This library is often used with frameworks such as React or Vue to manage component CSS classes based on their state or dynamic data. CLSX is easy to use and provides additional features such as class merging, object array support, etc.

### PostCSS and its plugins

PostCSS is a CSS preprocessor that allows transforming and extending the functionality of CSS using plugins. It can be used to add features not yet supported by browsers, such as CSS variables, mixins, calculations, etc.

PostCSS is also used to optimize CSS code by removing unused styles, grouping common selectors, minifying code, etc. It is very flexible and can be used with many tools and frameworks like React, Vue.js, Webpack, Gulp, etc.

In sum, PostCSS is a versatile and powerful tool that can help improve the development efficiency and performance of web applications.

#### Autoprefixer

Autoprefixer is a PostCSS plugin that automatically adds the necessary CSS browser prefixes based on the latest specifications. This allows web developers to avoid having to manually add prefixes for different browsers, which can be time consuming and cumbersome.

#### CSSNano

It's a PostCSS plugin which we can add to our build process, to ensure that the resulting stylesheet is as small as possible for a production environment.

## Documentation

### Material UI

This project was built for optimal use with MUI (excluding @mui/joy). The initialized MUI theme is fully compatible with the colors-scheme mode switch (light/dark) added in the header. For a good synchronization of MUI with the rest of the project, CSS variables are common to the whole project are used in the theme and in all the rest of the project. In this way, if one of these variables were to be modified, then it will be passed on to the whole project.

Thanks to the MUI Palette, all new added MUI components will automatically adapt to our theme, whether in dark or light mode (with a few exceptions).

Good practice is not to use a MUI component if we are not going to use its features. Thus, if we come to set up a simple bulleted list, we should not use the `<List> <ListItem>` component but favor the HTML `<ul> <li>` tags.

#### Features used

* CSSBaseline: This component helps standardize the basic styles of HTML elements to ensure a consistent appearance across all browsers. This is a sort of "CSS reset" that resets the base styles of HTML elements to common values, using the base styles provided by the browser.

* MuiClassNameSetup: It is used to generate style class names from styles defined in MUI themes. Moreover if we use the MUI style called typography to define the font size of an element, the MuiClassNameSetup function will be used to generate the name of the CSS class corresponding to the typography style. It is also possible to customize the class prefix used by the MUI components in our application. In our project, all "Mui-" prefixes have been replaced by "Qx-".

* Mui Styles - Extended Theme: It allows to extend the base theme of Material-UI to customize the style of its components. It allows us to modify basic theme properties, such as colors, fonts, sizes, spacing, etc. Moreover, this feature also allows creating custom variations of existing components or creating new components using the defined styles. This allows extensive customization of the style of the app or website.

* Mui Styles - Palette: For even more customization, the mui palette was used. Thanks to this, it's possible to quickly and easily modify the colors used in the styles of the components, by simply modifying the basic colors of the palette.

### Personalised React Component

#### Templates & Layouts

They have been used in such a way as to simplify and make the structure of our project more coherent by taking as a basis the principle of atomic design.

#### Header

The Header component has been customized in order to be able to choose its style according to the template (template="full" or template="article") or to activate or not the display of the notification bar:

```tsx
  <Header template="full" showNotificationBar={false} />
```

And many more that haven't been mentioned yet!
