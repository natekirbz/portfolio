class Vector {
    //x is a x position on the website.
    //y is also a position on the site.
    //x is the velocity at which the point moves.
    //y is the y velocity.
    constructor(x, y) {
        this.x = y;
        this.y = y;
        this.xVelocity = this.findVelocity(Math.random());
        this.yVelocity = this.findVelocity(Math.random());
    }

    // cut velocity in half and if less than .5 make it negative
    findVelocity(x) {
        if (x > 0.5) {
            return (x % 0.5) * 2;
        } else {
            return -(x * 2);
        }
    }
}

const v = new Vector(1, 2); 
console.log(v);
 
