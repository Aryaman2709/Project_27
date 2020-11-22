class Bob{
    constructor(x,y,r){
        var bob_options={
            isStatic:false,
            restitution: 1
        }
        this.body = Bodies.circle(x,y,r,bob_options)
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}