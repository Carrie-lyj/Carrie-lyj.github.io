function Bird(option) {
        this.ctx = option.ctx,
        this.img = option.img,
        this.canvasX = option.canvasX,
        this.canvasY = option.canvasY,

        this.birdIndex = 0,
        this.g = 0.0003,
        this.birdSpeed = 0,
        this.maxAngle = 45,
        this.maxSpeed = 0.45,
        this.birdW = this.img.width/3,
        this.birdH = this.img.height,
        this.birdX = 0
}
Bird.prototype = {
    constructor:Bird,
    drawBird: function (offsetT) {
        this.ctx.save();
        // 计算下落速度
        this.birdSpeed = this.birdSpeed + this.g * offsetT;
        // 计算下落距离
        var distanceY = this.birdSpeed * offsetT + this.g * offsetT * offsetT / 2;
        this.canvasY += distanceY;
        var currentAngle = this.maxAngle * this.birdSpeed / this.maxSpeed;
        if (currentAngle > 45) {
            currentAngle = 45;
        }
        this.birdX = this.birdIndex * this.birdW;
        // this.ctx.save();
        this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2);
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        //ctx.drawImage(图片,素材x,素材y,素材w,素材h,画布x,画布y,素材w,素材h)
        this.ctx.drawImage(this.img, this.birdX, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
        // console.log(this.birdIndex);
        this.birdIndex++;
        if (this.birdIndex > 2) {
            this.birdIndex = 0;
        }
        this.ctx.restore();
    }
}