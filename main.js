
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,200)
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}

function draw(){
    background("#4dff00");
}
function gotPose(){
    if(results.length>0){
        console.log(results);
    }
}