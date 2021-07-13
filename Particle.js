class Particle {
    constructor(x, y, r){
        var options = {
            restitution:1,
            friction:1,
            isStatic:false

        }

        this.r = r
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(this.color)
        ellipse(0,0, this.r, this.r);
        pop();

    }

}