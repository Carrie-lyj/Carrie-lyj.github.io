function Pipe(option) {
    this.ctx = option.ctx,
        this.topimg = option.topimg,
        this.bottomimg = option.bottomimg,
        this.x = option.x,

        this.w = option.topimg.width,
        this.h = option.topimg.height,
        this.space = 150,
        this.speed = 2,
        this.ty = 0,
        this.by = 0,
        this.getY();
}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.x -= this.speed;
        if (this.x < -this.w * 3) {
            this.x += 3 * this.w * 6;
            this.getY();
        }
        this.ctx.drawImage(this.topimg, this.x, this.ty, this.w, this.h);
        // 绘制路径
        this.ctx.rect(this.x,this.ty,this.w,this.h);
        this.ctx.drawImage(this.bottomimg, this.x, this.by, this.w, this.h);
        this.ctx.rect(this.x,this.by,this.w,this.h);
    },
    getY: function () {
        this.ty = -(Math.random() * 250 + 120);
        this.by = this.ty + this.h + this.space;
    }
}