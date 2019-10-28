# robwakeman-03

## Related documentation

/Users/robwakeman/Documents/Sites/Rob Wakeman 03 -
site notes.doc

## Unused files

Added unused style files in ./unused

## REM for Responsive Design

Initially, I was using `font-size: 1px` to make REM sizes easier to calculate.
https://coderwall.com/p/lh9t8g/update-your-font-size-to-rem-units

I have now decided against this - just not comfortable with it - seems weird.

```css
html {
  font-size: 1px;
}
```

When you want to change all font size according to breakpoints in your responsive design it is a lot more easy. See example:

```css
@media (min-width: 320px) {
  html {
    font-size: 1.4px;
  }
}

@media (min-width: 600px) {
  html {
    font-size: 1.2px;
  }
}
```

Now in smaller screens we re-size all fonts by 40% bigger, and in medium screens we re-size it by 20% bigger.

## CSS Modules in pages (e.g. index.js) and child components

By using `:global`, it allows styles in layout.module.scss to be used in any component, because layout.js is the parent to child components header.js, footer.js and parent to children i.e. pages such as index.js:

```css
/* Define the global style */
:global(.text) {
  font-size: 16px;
}
```

I did a test with:

```css
:global(.test-small) {
  font-size: $textSM;
  color: hotpink;
}
```

and used it in index.js as follows in the JSX:

```html
<span className="test-small">dolor sit</span>
```

and it works. This is what is produced in the DOM:

```html
<span class="test-small">dolor sit</span>
```

i.e. the class name won't be modulified such as `layout-module--content--3nIku`

Note: we don't need to camelCase the class name as it's not in the format:

`className={layoutStyles.container}`

How to apply global styles with CSS modules in a react app?
https://stackoverflow.com/questions/39805537/how-to-apply-global-styles-with-css-modules-in-a-react-app

Also:
https://github.com/webpack-contrib/css-loader#scope
https://v1.pro.ant.design/docs/style
https://github.com/css-modules/css-modules

Also, CSS Modules only convert className and id. Others such as property selectors and tag selectors are not processed. It is recommended to take className as the first choice.

## Sass - importing partials e.g. \_variables.scss

In gatsby-config.js

```javascript
resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/src/styles`],
      },
```

Then, using CSS modules, just import the partial from the CSS module e.g.
src/components/layout.module.scss
and use it inside layout.module.scss e.g.

```css
@import "variables";

body {
  background: $base-color;
}
```

https://spectrum.chat/gatsby-js/general/is-it-possible-to-use-sass-partials-with-css-sass-modules~de6b24e6-f8be-497a-a47d-fd4d42451c69

I was doing this and it was working, but I had to `@import "variables"` in all the following files: layout.module.scss footer.module.scss, nav.module.scss

That seemed a bit clunky. So, I opted for a different solution:

_To auto-include some sass vars/mixins/etc. into your component \*.scss files you simply can pass data option for node-sass with @import.
e.g: if you have common file in src/components/vars.scss, then use in your plugins declaration:_

```javascript
{
  resolve: `gatsby-plugin-sass`,
  options: {
    data: '@import "vars.scss";',
    includePaths: [
      'src/components',
    ],
  },
}
```

https://github.com/gatsbyjs/gatsby/issues/6655

I did that as follows, where I import both variables and minireset in the data key:

```javascript
{
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `@import "variables";@import "minireset";`,
    includePaths: [`${__dirname}/src/styles`],
  },
},
```

That allows me to remove the following from layout.js:

```javascript
import "../styles/main.scss"
```

But src/styles/main.scss was also providing another function: it was declaring the setting for Autoprefixer/Grid with:

```css
/* autoprefixer grid: autoplace */
```

So, I've decided to put that at the top of layout.module.scss instead.

Another thing is that the Sass @import rule is being deprecated. Ideally, we should be using @use instead:

```css
@use 'foundation/code';
```

https://sass-lang.com/documentation/at-rules/import
https://sass-lang.com/documentation/at-rules/use

However, I tried this in gatsby-config.js with:

```javascript
{
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `@use "variables";@use "minireset";`,
    includePaths: [`${__dirname}/src/styles`],
  },
},
```

and

```javascript
{
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `@use 'variables';@use 'minireset';`,
    includePaths: [`${__dirname}/src/styles`],
  },
},
```

and it didn't work. I think that's because I'd need to use a new version of Sass:

_Sass Modules are available as of October 1st, 2019 in Dart Sass 1.23.0._
https://css-tricks.com/introducing-sass-modules/

Not sure. I will leave for now as it's working.

_...this version is completely backwards compatible, and we have at least a year before anything will be deprecated from the old way of doing things... Over the next few years, Sass features of @import will be removed entirely._
https://www.oddbird.net/2019/10/02/sass-modules/
https://css-tricks.com/introducing-sass-modules/

## Autoprefixer / Grid prefixes for IE11

When writing CSS Grid that you expect to be prefixed correctly for IE11, use Grid Templates to define your rows and columns
https://medium.com/@zaid.aldabbagh/configure-autoprefixer-correctly-to-output-ms-grid-prefixes-97743d0a8eb8

Autoprefixer is used by default in Gatsby.

By default, Gatsby emulates the following config:
package.json

```javascript
{
 "browserslist": [
   ">0.25%",
   "not dead"
 ]
}
```

i.e. any browsers that have over 0.25% of the market share and are not dead

https://www.gatsbyjs.org/docs/browser-support/

It uses this config for both the Babel transpilation and Autoprefixer.

Here's what the browser list looks like (18/09/19)

https://browserl.ist/?q=%3E+0.25%25%2C+not+dead

At 25/09/19, it includes IE11 (1.91%) and states: Global coverage: 91.43%

Autoprefixer seems to be working, because I've put in some test CSS:

```css
transition: all 1s linear;
```

which correctly get prefixes added:

```css
-webkit-transition: all 1s linear;
transition: all 1s linear;
```

But for IE11 Grid prefixes, Autoprefixer needs to be specifically instructed. There's no easy way of accessing or overriding the Webpack config in Gatsby

_We can modify webpack config via plugins (and gatsby APIs in general), so it's technically possible (but certainly will be messy). There is defenitely demand to make it configurable (based on linked issue and this one). I'll try to come up with code snippet to do this_

https://github.com/gatsbyjs/gatsby/issues/15509

So the solution I'm using is control comments in CSS.

_Note that the grid: "no-autoplace" setting and the `/* autoprefixer grid: no-autoplace */` control comment share identical functionality to the grid: true setting and the `/* autoprefixer grid: on */` control comment. There is no need to refactor old code to use no-autoplace in place of the old true and on statements._
https://github.com/postcss/autoprefixer/blob/master/README.md

In testing, I was previously using `/* autoprefixer grid: on */`, but have since changed it to `/* autoprefixer grid: autoplace */`. This seems to be the newer spec, but it doesn't make any difference to the behaviour - both work.

I added the following control comment to main.scss

```css
/* autoprefixer grid: autoplace */
```

That leads to this control comment being placed at the top of the concatenated stylesheet, so there's no need to add it to the partials

- src/styles/\_layout-minireset.scss
- src/styles/\_layout-base.scss

However, Grid prefixes are not being generated.

Even if I add the browserslist key to package.json as follows:

```javascript
"browserslist": [
    "> 0.1%",
    "not dead"
  ],
```

which obviously then includes a much wider range of browsers and versions, Grid prefixes are STILL not generated.

This CSS:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}
```

should be converted to this CSS:

```css
.wrapper {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}
.wrapper > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}
```

according to the online Autoprefixer tool
https://autoprefixer.github.io/, but it's not.

Issue seems replicated here
https://github.com/gatsbyjs/gatsby/issues/15509

_We have autoprefixer in gatsby core (which gatsby-plugin-sass uses as we pass some prebundled rules to plugins) -_

_gatsby/packages/gatsby/src/utils/webpack-utils.js_

```javascript
 autoprefixer({ overrideBrowserslist, flexbox: `no-2009` }),
```

From that, it looks like it's overriding what I specify in the browserslist key in package.json, but it's not, because as noted above, it IS adding prefixes for some CSS rules.

I eventually discovered that this seems to be a bug that other people are experiencing:

Posted 05/09/19:

_I am able to use `/* autoprefixer grid: on */` and get the prefixes using Gatsby's development mode, but then they disappear on build._
https://github.com/gatsbyjs/gatsby/issues/15509

I am experiencing the same behaviour, i.e. I can see the -ms prefixes in Chrome Dev Tools in the DOM, but on build, they don't appear in the concatenated and minified stylesheet.

My plan:

Until this issue is fixed:

- I will continue to use CSS Grid
- I will use the default autoprefixer settings in Gatsby i.e. NOT add a browserslist key in package.json and rely on the default ">0.25%", "not dead"
- Then, just prior to deployment, I will manually run the grid rules through Autoprefixer CSS Online (https://autoprefixer.github.io)
- And then do:

`npm run build`

## Grid rules not supported in IE11

This is from warnings when running gatsby develop.

My CSS was:

```css
.wrapper {
  justify-items: center;
}
```

Warning:
IE does not support justify-items on grid containers. Try using justify-self on child elements instead:

```css
.wrapper > * {
  justify-self: center;
}
```

That removed the warning.

Later my CSS was

```css
.wrapper {
place-items: center;
```

I removed the IE warning by following the suggestion to use `place-self` on child items:

```css
.wrapper > * {
  place-self: center;
}
```

I have used a max-width on .main

```css
.main {
  background: linen;
  place-self: start center;
  max-width: 700px;
  margin-top: 64rem;
}
```

I could have alternatively used an inner grid on .wrapper-inner with 3 cols, sth like (I think!):

```css
.wrapper-inner {
  display: grid;
  grid-template-columns: minmax(32rem, 1fr) minmax(400px 800px) minmax(32rem, 1fr);
  grid-template-rows: auto;
}
```

_The grid-gap property, as well as its long-hand forms grid-column-gap and grid-row-gap, don't exist in the older spec, so they aren't supported by IE11._
https://stackoverflow.com/questions/45786788/css-grid-layout-not-working-in-ie11-even-with-prefixes

## Passing props and children into functional component

This works - Not totally sure that it's best practice:

```javascript
// layout.js
const Layout = ({ children, fruit }) => {
  // etc
```

```javascript
// index.js
const IndexPage = () => (
  <Layout fruit="apple">
  etc
```

i.e. the fruit property is destructured from props alongside children

To explain the passing of children (but not totally sure of my wording):
children is destructured from props.

So, instead of just passing props and accessing the children property in the rendered JSX:

```javascript
const Test = props => (
  <>
    <p>I am a test component</p>
    <div className="mychild">{props.children}</div>
  </>
)
```

we destructure props in the function argument and use it as follows:

```javascript
const Test = ({ children }) => (
  <>
    <p>I am a test component</p>
    <div className="mychild">{children}</div>
  </>
)
```

Good video explaining children
How to use React Children Props in your React websites and React webapps
https://www.youtube.com/watch?v=Mjrb8eZqBkA

## Typography variables in \_variables.scss

I was initially using CSS calc

`$textMD: calc($textBaseSize \* \$textScaleRatio);`

But, if using calc, we'd need to interpolate with `#{}` e.g.

`left: calc(50% - #{$width / 2});`

Instead, I'm just using straightforward arithmetic operators alone e.g. multiplication with `*` which is possible in Sass:

```css
$textMD: $textBaseSize * $textScaleRatio;
```

## Colour variables in \_variables.scss

// use colours from this site? see browser extension CSS Peeper > Colors
// https://www.b4e.com/

// Friend palette on this page?
// https://mycolor.space/?hex=%23FFE125&sub=1

// https://coolors.co/41d3bd-fffff2-791e94-de6449-407899

// https://www.colourlovers.com/palette/3428095/70s_Collegiate_Shag

// https://www.google.com/search?q=pinterest+colour+palette+70s&biw=1552&bih=984&tbs=qdr:y&sxsrf=ACYBGNSNIJicvC995eGxMzhoeSG06AT93g:1571431112217&tbm=isch&source=iu&ictx=1&fir=pwhSPmUUuLApkM%253A%252C-WcY39G3y-T66M%252C_&vet=1&usg=AI4_-kQOyJtLVxGl67DAA9fUlBKZTJbeEQ&sa=X&ved=2ahUKEwiK_O2J1ablAhWKFMAKHQ0gASYQ9QEwAnoECAkQDA#imgdii=n6w1eTxGyUpe2M:&imgrc=pwhSPmUUuLApkM:&vet=1

// https://maketintsandshades.com/#39cd9d,1e6075

// https://www.canva.com/learn/monochromatic-colors/

// https://www.colorhexa.com/6d5f00
