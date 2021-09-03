Webcam.set({

    width:400,height:400,image_format:"png",png_quality:500,
    constraints:{
        facingMode:"enviroment"
    }
   

});

Webcam.attach("#camera");

function captureimage(){

   Webcam.snap(function(url){
       document.getElementById("capturedimg").innerHTML='<img id="img1" src="'+url+'"/>';
   });

}

var model= ml5.imageClassifier("MobileNet",ModelLoaded);
function ModelLoaded(){
    
    console.log("model is ready");
    console.log(ml5.version);

}

function identify(){

    img=document.getElementById("img1");
     model.classify(img,result)

}

function result(error,answer){

      if (error) {
          console.error(error);
      }
      else{
          console.log(answer);
          document.getElementById("result").innerHTML=answer[0].label;
      }

}

