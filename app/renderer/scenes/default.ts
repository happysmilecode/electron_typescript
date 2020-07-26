export default class DefaultScene extends Phaser.Scene {

  progressBar: Phaser.GameObjects.Graphics;

  constructor() {
    super('default');
    this.progressBar = null;
  }

  init(data) {
    console.debug('init', data, this);
  }

  preload() {
    this.progressBar = this.add.graphics();
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);

    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
    this.load.svg('brunch', 'brunch-napkin.svg');
  }

  create() {
    const { width, height } = this.game.canvas
    const sky = this.add.image(width / 2, height / 2, 'sky');
    sky.alpha = 0.5;
    const brunch = this.add.image(width / 2, 150, 'brunch');
    brunch.alphaTopLeft = 0.2
    brunch.alphaTopRight = 0.2

    const particles = this.add.particles('red');
    const logo = this.physics.add.image(width / 2, 100, 'logo');

    const emitter = particles.createEmitter({
      speed: 10,
      scale: { start: 1, end: 0 },
      blendMode: Phaser.BlendModes.ADD,
      gravityY: -100,

    });
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
  }

  // extend:

  onLoadComplete(loader, totalComplete, totalFailed) {
    console.debug('complete', totalComplete);
    console.debug('failed', totalFailed);
    this.progressBar.destroy();
  }

  onLoadProgress(progress) {
    console.debug('progress', progress);
    this.progressBar
      .clear()
      .fillStyle(0xffffff, 0.75)
      .fillRect(0, 0, 800 * progress, 50);
  }

};
