class Actor {
    constructor (renderer) {
        this.renderer = renderer;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 1;
    }

    moveForward () {
        // move in direction of angle
        // check collisions here?
    }

    update () {
        this.x += this.speed;
        this.renderer.fillRect('blue', this.x, this.y, 50, 50);
    }
}

export default Actor;
