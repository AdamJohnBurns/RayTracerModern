import Renderer from './Renderer/Renderer.js';

const canvas = document.getElementById('canvas');
const renderer = new Renderer(canvas);

renderer.drawFilledRectangle('blue', 10, 10, 50, 50);
