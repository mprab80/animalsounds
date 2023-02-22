function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aJz_hMtIz/model.json");
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}