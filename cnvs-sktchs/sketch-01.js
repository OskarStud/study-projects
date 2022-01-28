const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1200, 1200 ]
};

const sketch = () => {
  const startXYScale = Math.random();

  return ({ context, width, height }) => {
    context.fillStyle = '#A1CDF4';
    context.fillRect(0, 0, width, height);

    const startX = startXYScale * width;
    const startY = startXYScale * height;
    context.strokeStyle = "#F79256"
    context.lineWidth = 6;
    context.strokeRect(startX, startY, 100,100);


  };
};

canvasSketch(sketch, settings);
