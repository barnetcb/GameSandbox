export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = { x: game.gameWidth / 2, y: game.gameHeight - 30 };
    this.speed = { x: 2, y: 2 };
    this.size = 16;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#0ff";
    ctx.fill();
    ctx.closePath();
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Wall on left or right
    if (
      this.position.x + this.speed.x > this.gameWidth - this.size ||
      this.position.x < this.size
    ) {
      this.speed.x = -this.speed.x;
    }
    //Wall on top and bottom
    if (
      this.position.y + this.speed.y > this.gameHeight - this.size ||
      this.position.y + this.speed.y < this.size
    ) {
      this.speed.y = -this.speed.y;
    }
    //collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
