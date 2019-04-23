// window.onload = function getUserMedia(){
//     navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
//     navigator.getUserMedia({ audio: true, video: true }, gotStream, streamError);

//     function gotStream(stream) {
//     document.querySelector('video').src = URL.createObjectURL(stream);
//     }

//     function streamError(error) {
//     console.log(error);
//     }
// }



// var mediaSource = new MediaSource();
// mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
// var mediaRecorder;
// var recordedBlobs;
// var sourceBuffer;


var userCamera = document.querySelector('video.main__media__content');


window.onload = function getMedia(){
    

    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    navigator.getUserMedia({ audio: true, video: true }, successCallback, errorCallback);
    
    function successCallback(stream) {
        var settingsButton = document.querySelector('#settingsButton');
        var rulesButton = document.querySelector('#rulesButton');

        var mainRules = document.querySelector('.main__rules');
        var mainSettings = document.querySelector('.main__settings');
        var mainStart = document.querySelector('.main__start');
        
        settingsButton.disabled = !settingsButton.disabled;
        settingsButton.onclick = function viewRulesPage(){
            mainRules.style.display = 'block';
            mainSettings.style.display ='none';
        } 
        

        rulesButton.onclick = function viewStartPage(){
            mainStart.style.display = 'block';
            mainRules.style.display ='none';
        } 
        window.stream = stream;
        userCamera.srcObject = stream;

    }
      
    function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
    }
}