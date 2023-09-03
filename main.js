https://teachablemachine.withgoogle.com/models/P40VFRAb8/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Camera=document.getElementById("camera");
Webcam.attach(Camera);
function Takesnapshot(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML="<img src="+data_uri+" id='selfie_image'>";

    });
}

console.log("ml5 version: ",ml5.version);
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P40VFRAb8/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}
prediction1="";
prediction2="";
function speak(){
var synth=window.speechSynthesis;
speakdata1="the first predicion is "+prediction1;
speakdata2=" and the second prediction is "+prediction2;
var Utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(Utterthis);
}
function Check(){
    image=document.getElementById("selfie_image")
    Classifier.classify(image, gotResult);

}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("emotionname1").innerHTML=results[0].label;
         if(results[0].label=="Amazing"){
            document.getElementById("emoji1").innerHTML="&#128076;";
         }
         if(results[0].label=="Best"){
            document.getElementById("emoji1").innerHTML="&#128077;";
         }
         if(results[0].label=="Victory"){
            document.getElementById("emoji1").innerHTML="&#9996;";
         }
    }

}
