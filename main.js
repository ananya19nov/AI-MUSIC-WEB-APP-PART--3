song1 = "";
song2 = "";
leftwristX = 0;
leftwristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightwristY = resulta[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftwristX + "leftWristY = " + leftWristY + "rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    image(video, 0, 0, 600, 500 );
}