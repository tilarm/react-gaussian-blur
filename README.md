# GaussianBlur

A simple SVG Gaussian Blur component on any element.

Mainly using native SVG feGaussianBlur Element
(https://developer.mozilla.org/fr/docs/Web/SVG/Element/feGaussianBlur)


## Demo & Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


**Online Demo :**
https://www.webpackbin.com/bins/-Kr6ZyoaaStBb8EtPonO



## Installation

The easiest way to use react-gaussian-blur is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-gaussian-blur.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-gaussian-blur --save
```



## Usage

Simply adjust the absciss (x attribute) or ordinate (y attribute) to blur the required directions


```
import GaussianBlur from ('react-gaussian-blur')

<GaussianBlur x="10" y="5">
 Blured Example
</GaussianBlur>
```

## TODO

* Simply use Babel to improve the development of the component

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License



Copyright (c) 2017 Armen Tildian.

