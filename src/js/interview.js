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

import './modules/mediaRecorder';





var main = document.getElementById('main');

window.onload = function getMedia(){
    var settings = document.getElementById('settings');
    var cloneSettings = settings.content.cloneNode(true);
    main.appendChild(cloneSettings);
    
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    navigator.getUserMedia({ audio: true, video: true }, successCallback, errorCallback);
    
    function successCallback(stream) {
        var settingsButton = document.querySelector('#settingsButton');
        var mainSettings = document.querySelector('.main__settings');
      
        settingsButton.disabled = !settingsButton.disabled;
        settingsButton.onclick = function viewRulesPage(){
            
          var rules = document.getElementById('rules');
          var cloneRules = rules.content.cloneNode(true);
          main.appendChild(cloneRules);
          var mainRules = document.querySelector('.main__rules');
          main.replaceChild(mainRules, mainSettings);
          var userCamera = document.querySelector('video');
          window.stream = stream;
          userCamera.srcObject = stream;
            
        
        var rulesButton = document.querySelector('#rulesButton');
        rulesButton.onclick = function viewStartPage(){
          var start = document.getElementById('start');
          var cloneStart = start.content.cloneNode(true);
          main.appendChild(cloneStart);
          var mainStart = document.querySelector('.main__start');
          main.replaceChild(mainStart, mainRules);
          var userCamera = document.querySelector('video');
          window.stream = stream;
          userCamera.srcObject = stream;



          var startButton = document.querySelector('#startButton');
          startButton.onclick = function viewStartPage(){
            var questions = document.getElementById('questions');
            var cloneQuestions = questions.content.cloneNode(true);
            main.appendChild(cloneQuestions);
            var mainQuestions = document.querySelector('.main__questions');
            main.replaceChild(mainQuestions, mainStart);
            var userCamera = document.querySelector('video');
            window.stream = stream;
            userCamera.srcObject = stream;


            
            
            //  here media recorder start












            var recordButton = document.querySelector('#recordButton');
            recordButton.onclick = toggleRecording;
            var mediaRecorder;
            function toggleRecording() {
              if (recordButton.textContent === "Записать видео") {
                startRecording();
              } else {
                stopRecording();
                recordButton.textContent = 'Записать видео';
                playButton.disabled = false;
                downloadButton.disabled = false;
              }
            }
            function startRecording() {
              var options = {mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 100000};
              var recordedBlobs = [];
              try {
                mediaRecorder = new MediaRecorder(window.stream, options);
              } catch (e0) {
              console.log('Unable to create MediaRecorder with options Object: ', options, e0);
              try {
                  options = {mimeType: 'video/webm;codecs=vp8', bitsPerSecond: 100000};
                  mediaRecorder = new MediaRecorder(window.stream, options);
              } catch (e1) {
                  console.log('Unable to create MediaRecorder with options Object: ', options, e1);
                  try {
                  options = 'video/mp4';
                  mediaRecorder = new MediaRecorder(window.stream, options);
                  } catch (e2) {
                  alert('MediaRecorder is not supported by this browser.');
                  console.error('Exception while creating MediaRecorder:', e2);
                  return;
                  }
              }
              }
              console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
              recordButton.textContent = 'Закончить запись';
              // mediaRecorder.onstop = handleStop;
              function handleDataAvailable(event) {
              if (event.data && event.data.size > 0) {
                  recordedBlobs.push(event.data);
              }
              }
              mediaRecorder.ondataavailable = handleDataAvailable;
              mediaRecorder.start(10); // collect 10ms of data
              console.log('MediaRecorder started', mediaRecorder);
          }    

          function stopRecording() {
            mediaRecorder.stop();
            // console.log('Recorded Blobs: ', recordedBlobs);


            // recordedVideo.controls = true;
          }
            


























            //  here media recorder end



        }


        }
      }
       

    }
      
    function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
    }
}


