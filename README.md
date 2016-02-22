# react.container

[![Build Status](https://travis-ci.org/React-Components-Organization/react.container.svg?branch=master)](https://travis-ci.org/React-Components-Organization/react.container)
[![npm version](https://badge.fury.io/js/react.container.svg)](https://badge.fury.io/js/react.container)
[![npm](https://img.shields.io/npm/dt/react.container.svg)](https://www.npmjs.com/package/react.container)

A flexible and reusable react component, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install react.container --save
```

## Usage

```js
import ReactContainer from 'react.container';

// config is an object containing javascript styling properties only
const config = {
  backgroundColor: 'blue',
  height: 300
};

// direction can be 'vertical' or 'horizontal'
// hidden define if the container is visible or not, if hidden is not set container is visible
<ReactContainer scrollable direction={'vertical'} config={config} hidden>
  ... // child components live here
</ReactContainer>
```

### Properties

#### scrollable {boolean}

>**NOTE:** Configuration options to make this Container scrollable. By default a container is not scrollable

```js
<ReactContainer scrollable={true} />
  or
<ReactContainer scrollable />
```

#### direction {string}

>**NOTE:** 'horizontal', 'vertical' or 'both' to enable scrolling for that direction.

```js
<ReactContainer scrollable direction={'horizontal'} />
```

#### hidden {boolean}

>**NOTE:** Whether or not this Component is hidden (its a CSS 'display' property set to 'none').

```js
<ReactContainer hidden={true} />

<ReactContainer hidden />
```

#### cls {string}

>**NOTE:** The CSS class to add to this component's element, in addition to the baseCls 'container'.

```js
<ReactContainer cls={'myCustomCls'} />
```

#### floating {object}

>**NOTE:** An object of position properties to make this Container floatable. This will make your Container in position 'absolute'.

```js
const floatingObject = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
};

<ReactContainer floating={floatingObject} />
```

#### height {number}

>**NOTE:** The height of this Component; must be a vnumber value, e.g: 300. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
<ReactContainer height={100} />
```

#### width {Number}

>**NOTE:** The width of this Component; must be number value, e.g: 300. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
<ReactContainer width={100} />
```

#### config {Object}

>**NOTE:** The most important property, object CSS styles that will be rendered into an inline style attribute when the Component is rendered. Any CSS style can be set in config. By default a container is 'naked', so feel free to style it at will.

```js
const configObj = {
  backgroundColor: red,
  height: 100,
  width: 100,
  position: 'relative'
};

<ReactContainer config={configObj} />
```

## Stats

[![NPM](https://nodei.co/npm-dl/react.container.png?months=1)](https://nodei.co/npm/react.container/)

[![NPM](https://nodei.co/npm-dl/react.container.png?downloads=true)](https://nodei.co/npm/react.container/)

## License

The MIT License (MIT)

Copyright (c) 2016 React-Components-Organization

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
