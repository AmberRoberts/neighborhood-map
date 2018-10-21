# Neighborhood Map

## Table of Contents

- [Project Goals](#goals)
- [How to Run](#how-to-run)
- [Service Worker](#service-worker)
- [Dependencies](#dependencies)
- [References & Acknowledgements](#references-and-acknowledgements)

## Goals

This app was build as the 7th project for the Udacity/Grow with Google Front End Web Development NanoDegree. The goal of the project is to implement Google's Maps API and another API service to create a React app to display a map, markers, and information. View the project's [rubric](https://review.udacity.com/#!/rubrics/1351/view)

## How to Run

Clone the project using `$ git clone https://github.com/AmberRoberts/neighborhood-map`

Run `$ npm install` to install the project dependencies.
Run `$ npm install react-burger-menu` for React-Burger-Menu

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Service Worker

In order for the service worker to function properly, you must `npm run build`. This builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Dependencies

This project uses or requires the following:
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- [Google Maps API](https://cloud.google.com/maps-platform/)
- [Foursquare API](https://developer.foursquare.com/)
- [React-Burger-Menu](https://github.com/negomi/react-burger-menu)

## References and Acknowledgements

Referenced materials include:
* Google Maps API and Foursquare API documentation
* [Reactjs documentation](https://reactjs.org/docs/forms.html)
* Late-night cohort chats and bug-hunting with Amazing_Codehort_FEND
* One-on-One mentor sessions with the fantastic Derick Gross
* Some serious code-explaining from Carlos F [FEND].
* [Spread operator research](https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1)
* StackOverflow, specifically:
  * [How to implement Google Maps w/o an external library](https://stackoverflow.com/questions/45429484/how-to-implement-google-maps-js-api-in-react-without-an-external-library)
  * [Using Google map in react component](https://stackoverflow.com/questions/48493960/using-google-map-in-react-component)
  * Research on [returns object-object](https://stackoverflow.com/questions/34573792/javascript-function-to-return-object-returns-object-object) issue
* Mozilla's developer documentation, specifically:
  * [Global Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  * [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* Elharony's [Google Maps with React](https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA) tutorial
* Forrest Walker's [Neighborhood Map Walkthrough](https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
