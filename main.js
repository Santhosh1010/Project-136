object = "";
status = "";

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("object_input").value;
    console.log(object);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true
}

function draw()
{
    image(video, 0, 0, 480, 380);
}