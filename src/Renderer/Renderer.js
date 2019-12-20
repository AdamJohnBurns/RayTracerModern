class Renderer {
    constructor (canvas) {
        this.context = canvas.getContext('2d');
        console.log('Hello world!');
    }

    drawFilledRectangle (colour, x, y, width, height) {
        this.context.fillStyle = colour;
        this.context.fillRect(x, y, width, height);
    }
}

export default Renderer;
