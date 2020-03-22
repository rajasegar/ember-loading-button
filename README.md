# ember-loading-button

[![Build Status](https://travis-ci.org/rajasegar/ember-loading-button.svg?branch=master)](https://travis-ci.org/rajasegar/ember-loading-button) 
[![npm](https://img.shields.io/npm/dm/ember-loading-button.svg)](https://www.npmjs.com/package/ember-loading-button)
[![npm version](http://img.shields.io/npm/v/ember-loading-button.svg?style=flat)](https://npmjs.org/package/ember-loading-button "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-loading-button.svg?branch=master)](http://emberobserver.com/addons/ember-loading-button)

An Ember button component addon for Asynchronous actions with loading indicators.

Heavily inspired by this [Ladda Buttons](http://lab.hakim.se/ladda/)

## Demo

[Demo](http://rajasegar.github.io/ember-loading-button)

## Installation
* `ember install ember-loading-button`

## Usage

With Default Loading indicator 
```hbs
{{#loading-button
       transition="expand-left"
       action=(action 'promiseAction')}}
       Submit
{{/loading-button}}

```

With an optional loading indicator
```hbs
    {{#loading-button 
      loaderStyle="bars" 
      transition="expand-right" 
      action=(action 'promiseAction')}}
    Submit
    {{/loading-button}}
```

With customClass to override the styles
```hbs
    {{#loading-button 
      transition="expand-down" 
      customClass="btn-warning" 
      action=(action 'promiseAction') }}
    Submit
    {{/loading-button}}
```

## Properties

### transition 
The style for the loading indicator which indicates how and where the loader is placed within the button.

List of available styles:
* expand-left
* expand-right
* expand-down
* expand-up
* contract
* zoom-in
* zoom-out
* slide-left
* slide-right
* slide-up
* slide-down

### action
Closure action parameter to execute when the button is clicked , will be returning a Promise based on which the 
button states are derived and the UI is rendered.

### customClass
This will get the name of the custom class name with which you want to override your button styles.

### size
Various size options for the button

List of available sizes:
* xs => Extra Small
* s  => Small
* l  => Large
* xl => Extra Large

### loaderStyle
The type of loader you want to choose from:

* circular-dots-fade
* bars
* rotating-slice
* fading-circle
* scaling-circles
* trailing-dots
* horizontal-dots

## Credits
* [Hakim El Hattab](http://hakim.se/) for Ladda buttons
* [Luke Haas](https://projects.lukehaas.me/css-loaders/) for CSS loaders
* [Lauren Tan](https://github.com/poteto) for ember-async-button
* [Mary Lou](https://github.com/crnacura) for the inspiration

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
