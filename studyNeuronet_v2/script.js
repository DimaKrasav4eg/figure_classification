const nImages = 80;
let circles = new Array(nImages),
    squares = new Array(nImages),
    triangles = new Array(nImages);

function preload() {
    for (let i = 0; i < nImages; i ++) {
        let index = i + 1;
        // circles[i] = loadImage(`data/all/circle${index}.png`);
        // squares[i] = loadImage(`data/all/square${index}.png`);
        // triangles[i] = loadImage(`data/all/triangle${index}.png`);

        circles[i] = loadImage(`data/all/circle${index}.png`);
        circles[i].copy(circles[i], 0, 0, 200, 200, 0, 0, 63, 63);
        squares[i] = loadImage(`data/all/square${index}.png`);
        squares[i].copy(squares[i], 0, 0, 200, 200, 0, 0, 63, 63);
        triangles[i] = loadImage(`data/all/triangle${index}.png`);
        triangles[i].copy(squares[i], 0, 0, 200, 200, 0, 0, 63, 63);
    }
    console.log('preload finished!');

}

let shapeClassifier;
function setup() {
    createCanvas(400, 400);
    
    let options = {
    inputs: [64, 64, 4],
    task: 'imageClassification',
    debug: true,
    };

    shapeClassifier = ml5.neuralNetwork(options);
    
    for (let i = 0; i < circles.length; i ++) {
        shapeClassifier.addData({ image: circles[i] }, { label: 'circle' });
        shapeClassifier.addData({ image: squares[i] }, { label: 'square' });
        shapeClassifier.addData({ image: triangles[i] }, { label: 'triangle' });

    }
    shapeClassifier.normalizeData();
    shapeClassifier.train({ epochs: 50 }, finishedTraining);
}
function finishedTraining() {
    console.log('traning finished!');
    shapeClassifier.save();
}