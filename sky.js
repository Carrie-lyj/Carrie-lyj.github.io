function Sky(option){
    this.ctx=option.ctx,
    this.img=option.img,
    this.x=option.x,
    this.y=option.y,

    this.speed=2,
    this.w=this.img.width
}
Sky.prototype={
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x<-this.w){
            this.x += 2*this.w;
        }
        this.ctx.drawImage(this.img,this.x,this.y);
    }
}