Brunch with Phaser 3 (Electron + TypeScript)
====================

A [Brunch](http://brunch.io) skeleton for making desktop games with [Phaser 3](http://phaser.io/phaser3), [Electron][1] and [TypeScript][4]. ([Why Brunch?](http://brunch.io/docs/why-brunch))

    brunch new <project> -s delni/brunch-phaser-desktop

You don't want to build a desktop game but you want to keep the brunch + phaser stack ? See you in the [:eyes: More](#more) section

:tada: Get started
-----------

- Install (if you don't have them):
  - [Node.js](https://nodejs.org)
  - [Brunch](http://brunch.io): `npm install -g brunch`
- Run:
  - `brunch new <project> -s delni/brunch-phaser-desktop`
  - `npm start` watches the project with continuous rebuild.
  - `npm build` or `brunch build --production` builds a minified project for production.  
- Make:
  - Write all that concern window handling into [process](app/process)
  - Write all that concern game handling into [renderer](app/renderer).
  - Put game assets in [assets](app/static/assets).

- Does it work with **yarn** ?  
  Yes it does ! However, you may encounter an **npm warn lifecycle** due to yarn using another node bin. It should not be an issue while those two node bins are compatible (*eg.* use the same features)

:tv: Electron
------

[Electron][1] is used to bundle your game in a desktop application. It allows binding to system api (like notification, status bar, ...).

When creating a production-ready app, please have a look to [electron-builder](https://github.com/electron-userland/electron-builder) which is highly customizable

:video_game: Phaser
------

Phaser is managed through [npm](https://docs.npmjs.com/cli/npm). The latest release is installed when you create a new project.

    npm view phaser version

Update with:

    npm update

### Other builds

See the `npm.static` entry in [brunch-config](./brunch-config.coffee).

:space_invader: Typescript
----------

[Phaser 3's definitions][3] are still evolving, and there may be errors.

<a name="more"></a>
:eyes: More
------------
If you don't want to use Electron, or Typescript, please have a look to other brunch + phaser skeleton:

- [brunch-phaser](https://github.com/samme/brunch-phaser "Brunch with Phaser 3")
- [brunch-phaser-coffee](https://github.com/samme/brunch-phaser-coffee "Brunch with Phaser 3 and CoffeeScript")
- [brunch-phaser-es6](https://github.com/samme/brunch-phaser-es6 "Brunch with Phaser 3 and ES6")
- [brunch-phaser-typescript](https://github.com/samme/brunch-phaser-typescript "Brunch with Phaser 3 and TypeScript")
- [brunch-phaser2](https://github.com/samme/brunch-phaser2 "Brunch with Phaser CE")



:wrench: Configuration
-------------

- [brunch](http://brunch.io/docs/config)
- [electron][1]
- [typescript-brunch](https://www.npmjs.com/package/typescript-brunch#brunch-config)
- [uglify-js-brunch](https://www.npmjs.com/package/uglify-js-brunch#usage)
  - [minify options](https://www.npmjs.com/package/uglify-js#minify-options)

[1]: https://www.electronjs.org
[2]: https://www.typescriptlang.org/docs/handbook/modules.html
[3]: https://github.com/photonstorm/phaser3-docs/tree/master/typescript
[4]: https://www.typescriptlang.org
