Webcam.set({

width:300,
height:250,
image_format:'png',
png_quality:100,

})

Webcam.attach("#camera")

function take_picture(){

    Webcam.snap(function (picture_result){

        document.getElementById("result").innerHTML= `<img id=result_of_photo src=${picture_result}>`

        
    })
}

console.log("ml5", ml5.version)
storage= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0fEo3BNzB/model.json",modelLoaded)

function modelLoaded(){

    console.log("Model Has Been Successfully Loaded")
}


function identify(){

img = document.getElementById("result_of_photo")

storage.classify(img, get_result)

}

function get_result(error,result){

    if (error){

        console.error(error)
    }

    else{

        console.log(result)

        document.getElementById("object_result").innerHTML=result[0].label
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(2)

    }




    
}




