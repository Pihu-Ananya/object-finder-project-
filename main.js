Status=""
input_text=""
function setup() {
    canvas=createCanvas(300,290)
    canvas.position(480,250)
    video=createCapture(VIDEO)
    video.size(300,290)
    video.hide()
}
function start() {
    object_detector=ml5.objectDetector("cocossd" , modelloaded) 
    document.getElementById("status").innerHTML= "Status : Detecting Objects"
    input_text=document.getElementById("input_id").value
}
function modelloaded(){
    console.log("modelloaded")
    Status=true;
}
function draw() {
    image(video ,0,0,300,290)
    if(Status != ""){
        dbject_detector.detect(video,gotResult);
        for(i = 0;i < objects.length;i++){
            document.gotElementById("Status").innerHTML ="Status : Object Detected";
            console.log(objects.length);
            persent=floor
        }
    }
}