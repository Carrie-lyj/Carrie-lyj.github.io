function Land(option){
    this.ctx=option.ctx,
    this.img=option.img,
    this.x=option.x,
    this.y=option.y,

    this.w=option.img.width,
    this.h=option.img.height,
    this.speed=2
}
Land.prototype={
    constructor:Land,
    drawLand:function(){
        this.x -= this.speed;
        if(this.x<-this.w){
            this.x+=4*this.w;
        }
        ctx.drawImage(this.img,this.x,this.y);
    }
}