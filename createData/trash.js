function setup() {
    createCanvas(64, 64);
    noLoop();
}

function draw() {
    background(255);
    push();
    strokeWeight(3);
    let r = random(6, 22);     
    translate(width/2, height/2);

    rotate(random(- PI / 4.0, PI / 4.0));

    triangle(0, -r, r, r, -r, r);
    pop();

}

