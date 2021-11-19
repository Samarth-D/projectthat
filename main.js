function soundClassifier(){
    navigator.mediaDevices({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cq-w_pwCk/", modelReady);
    function modelReady(){
        classifier.classify(gotResults);
    }
}