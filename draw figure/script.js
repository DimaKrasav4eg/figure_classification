let shapeClassifier,
    canvas,
    divResult0,
    divResult1,
    divResult2,
    inputImage,
    buttonClear;

const sizeCanvas = 400;

function setup(){
    canvas = createCanvas(sizeCanvas, sizeCanvas);
    pixelDensity(1);

    let options = {
        task: 'imageClassification'
    };

    shapeClassifier = ml5.neuralNetwork(options);

    const modelDetails = {
        model: '../studyNeuronet/model_v2/model.json',
        metadata: '../studyNeuronet/model_v2/model_meta.json',
        weights: '../studyNeuronet/model_v2/model.weights.bin'
    };

    shapeClassifier.load(modelDetails, modelLoaded);

    background(255);
    buttonClear = createButton('Clear canvas');
    buttonClear.mousePressed(function(){
        background(255);
    });

    divResult0 = createDiv('Loading model...');
    divResult1 = createDiv();
    divResult2 = createDiv();

    inputImage = createGraphics(64, 64);
}

function modelLoaded(){
    console.log('Model is ready!');
    classifyImage();
}

function classifyImage(){
    inputImage.copy(canvas, 0, 0, sizeCanvas, sizeCanvas, 0, 0, 64, 64);

    shapeClassifier.classify({ image: inputImage }, getResults);
}

function getResults(error, results){
    if(error){
        console.error(error);
        return;
    }

    divResult0.html(`${results[0].label} ${nf(100 * results[0].confidence, 2, 1)}%`);
    divResult1.html(`${results[1].label} ${nf(100 * results[1].confidence, 2, 1)}%`);
    divResult2.html(`${results[2].label} ${nf(100 * results[2].confidence, 2, 1)}%`);

    classifyImage();
}

function draw(){
    if(mouseIsPressed){
        strokeWeight(3/64*sizeCanvas);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}