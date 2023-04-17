# Our React Project

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

### Installation

1. Create a new folder ready to receive the project
2. Import git repo inside for example with VSCode
3. Change directory to go to folder named "react-qx"
4. Run the following command in your terminal: `yarn run start`

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

### Concurrently

### CLSX

### PostCSS and its plugins

#### CSSNano

It's a PostCSS plugin which we can add to our build process, to ensure that the resulting stylesheet is as small as possible for a production environment.

### Autoprefixer

### Material-UI

### Emotion

## Documentation

### MUI Initialization

This project was built for optimal use with MUI (excluding @mui/joy). The initialized MUI theme is fully compatible with the colors-scheme mode switch (light/dark) added in the header. For a good synchronization of MUI with the rest of the project, CSS variables are common to the whole project are used in the theme and in all the rest of the project. In this way, if one of these variables were to be modified, then it will be passed on to the whole project.

## Using MUI Components

Good practice is not to use a MUI component if we are not going to use its features. Thus, if we come to set up a simple bulleted list, we should not use the `<List> <ListItem>` component but favor the HTML `<ul> <li>` tags.
