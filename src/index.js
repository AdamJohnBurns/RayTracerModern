import Renderer from './Renderer/Renderer.js';
import World from './World/World.js';
import worldData from './worlddata.json'
import Actor from './Actor/Actor.js';
import Input from './Input/Input.js';

const canvas = document.getElementById('canvas');

const renderer = new Renderer(canvas);
const input = new Input();
const world = new World(worldData);
const player = new Actor(renderer);

input.onForwardPressed(player.moveForward);

renderer.update(() => {
    input.update();
    player.update();
    console.log('update() tick');
});
