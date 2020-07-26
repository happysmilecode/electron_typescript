# http://brunch.io/docs/config
module.exports =
  conventions:
    assets: 'app/static/**'
    ignored: 'app/process/**'
  files:
    javascripts:
      joinTo:
        'app.js': 'app/renderer/**'
        'vendor.js': ['node_modules/**', 'vendor/**']
    stylesheets:
      joinTo: 'app.css'
  modules:
    autoRequire:
      'app.js': ['renderer/initialize']
  npm:
    static: [
      'node_modules/phaser/dist/phaser.js'
    ]
  plugins:
    brunchTypescript:
      ignoreErrors: [2503] # eg Cannot find namespace 'Phaser'
  server:
    noPushState: on
  notifications:
    levels: ['error', 'warn', 'info']
    app: 'Phaser Desktop'
