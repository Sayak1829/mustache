function preload() {

}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}
function draw() {
    image(video, 0, 0, 400, 400);
}
function take_snapshot() {
    save("mustache.png");
}
function modelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) { 
        console.log(results);
        console.log("mustache x=" + results[0].pose.nose.x);
        console.log("mustache y=" + results[0].pose.nose.y);
    }
}