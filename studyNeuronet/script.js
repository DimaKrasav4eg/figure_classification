let circles = [],
    squares = [],
    triangles = [];

function preload() {
    for (let i = 0; i < 220; i ++) {
        let index = nf(i + 1, 4, 0);
        circles[i] = loadImage(`data/circle${index}.png`);
        squares[i] = loadImage(`data/square${index}.png`);
        triangles[i] = loadImage(`data/triangle${index}.png`);
    }
}

let shapeClassifier;
function setup() {
    createCanvas(400, 400);
    
    let options = {
    inputs: [64, 64, 4],
    task: 'imageClassification',
    debug: true
    };

    shapeClassifier = ml5.neuralNetwork(options);
    
    for (let i = 0; i < circles.length; i ++) {
        shapeClassifier.addData({ image: circles[i] }, { label: 'circle' });
        shapeClassifier.addData({ image: squares[i] }, { label: 'square' });
        shapeClassifier.addData({ image: triangles[i] }, { label: 'triangle' });

    }
    shapeClassifier.normalizeData();
    shapeClassifier.train({ epochs: 100 }, finishedTraining);
}
function finishedTraining() {
    console.log('traning finished!');
    shapeClassifier.save();
}