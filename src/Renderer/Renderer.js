class Renderer {
    constructor (canvas) {
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
    }

    fillRect (colour, x, y, width, height) {
        this.context.fillStyle = colour;
        this.context.fillRect(x, y, width, height);
    }

    point (colour, x, y) {
        this.context.fillStyle = colour; // TODO more efficient not to do this every time?
        this.context.fillRect(x, y, 1, 1);
    }

    update (callback) {
        // TODO make this actually loop
        requestAnimationFrame(() => {
            this.fillRect('white', 0, 0, this.width, this.height);
            callback();
        });
    }
}

export default Renderer;
