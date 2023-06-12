import Konva from 'konva';
import { SVG } from '@svgdotjs/svg.js'

EventTarget.prototype.on = EventTarget.prototype.addEventListener;

let SOURCE = null;

// first we need to create a stage
var stage = new Konva.Stage({
  container: 'app',   // id of container <div>
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
var layer = new Konva.Layer();

var image = null;
if (SOURCE !== null){
  image = Konva.Image.fromURL(SOURCE, (image) => {
    layer.add(image);
  });
}


// add the shape to the layer
if (image !== null){
  layer.add(image);
}

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

document.getElementById('svg-layer').contentEditable = true;
var draw = SVG().addTo(document.getElementById('svg-layer')).size(window.innerWidth, window.innerHeight)
draw.text("I love St.Mocha").move(window.innerWidth / 2 ,window.innerHeight / 2).font({ fill: '#f06', size: "32px", family: 'Inconsolata' })
document.getElementById('app').on('input', function(){
  // credits to @https://github.com/konvajs/react-konva/issues/441
  SOURCE = 'data:image/svg+xml;base64,' + window.btoa(this.firstElementChild.instance.node)
  /* console.log(SOURCE); */
})

document.addEventListener("DOMContentLoaded", ()=>{
  window.GLOBALS__KONVA_STAGE = stage;
})