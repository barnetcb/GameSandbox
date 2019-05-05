export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.width = 50;
    this.height = 50;
    this.gameWidth = gameWidth;
    this.maxSpeed = 7;
    this.speed = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 50
    };
  }
}
