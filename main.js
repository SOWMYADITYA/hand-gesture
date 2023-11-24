prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:398,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("CAMERA")
Webcam.attach('#camera');

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("SNAPSHOT").innerHTML='<img id="Vmax" src="'+data_uri+'"+>'
  });  
}
console.log("ml5 version ",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SMgJSCh03/model.json',modelloaded)
function modelloaded(){
    console.log("model is loaded");
}
function speak(){
    synth=window.speechSynthesis;
    speak1="first prediction is "+prediction1;
    speak2="second prediction is "+prediction2;
    speech=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(speech);
}
