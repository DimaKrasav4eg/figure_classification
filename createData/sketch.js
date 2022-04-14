function setup() {
    createCanvas (64, 64);
    frameRate(5);
}
let k = 0;
function draw() {
    // for (let i = 0; i < 3; i ++) {
        k ++;
        background(255);
        push();
        strokeWeight(3);
        let r = random(6, 20),
            x = random(r, width - r),
            y = random(r, height - r);
        stroke(random(100), random(100), random(100));
        translate(x, y);
        // if (i == 0) {
            // circle (0, 0, r*2);
            // save(`circle${nf(k, 4, 0)}.png`)
        // }
        // else if (i == 1) {
            // rectMode(CENTER);
            // rotate(random(- PI / 4.0, PI / 4.0));
            // square(0, 0, r*2);
            // save(`square${nf(k, 4, 0)}.png`)
        // }
        // else if (i == 2) {
            rotate(random(- PI / 4.0, PI / 4.0));
            triangle(0, -r, r, r, -r, r);
            save(`triangle${nf(k, 4, 0)}.png`);
        // }
        pop();

    }
// }
