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
            startButton.onclick = function viewQuestionsPage(){
              var questions = document.getElementById('questions');
              var cloneQuestions = questions.content.cloneNode(true);
              main.appendChild(cloneQuestions);
              var mainQuestions = document.querySelector('.main__questions');
              main.appendChild(mainQuestions);
              if(main.contains(mainStart)){
                main.removeChild(mainStart);

              }
              var userCamera = document.querySelector('video');
              window.stream = stream;
              userCamera.srcObject = stream;
            
              


            


            
            
              //  here media recorder start












            var recordButton = document.querySelector('#recordButton');
            var mediaRecorder;
            var recordedBlobs = [];
            
            recordButton.onclick = function toggleRecording() {
                
                var pauseToggle = document.getElementById('pauseResumeToggle');
                var clonePauseToggle = pauseToggle.content.cloneNode(true);
                mainQuestions.appendChild(clonePauseToggle);

                var stopVideoButton = document.getElementById('stopButtonTemp');
                var cloneVideoButton = stopVideoButton.content.cloneNode(true);
                mainQuestions.insertBefore(cloneVideoButton, pauseButton);
                mainQuestions.removeChild(recordButton);
                
                var countdown = document.getElementById("countdown");
                countdown.innerHTML = 'Остаток времени <span id="time"></span>';
                
                startRecording();


              var timeForFunction;
              var timeoutHandle = undefined;
              function timer(minutes, seconds) {
                if(!timeoutHandle){
                  function tick() {
                      var counter = document.getElementById("time");
                      
                      counter.innerHTML = minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                      timeForFunction = [minutes, seconds-1];
                      
                      seconds--;
                      if (seconds >= 0) {
                          timeoutHandle = setTimeout(tick, 1000);
                      } else {
                          if (minutes >= 1) {
                              setTimeout(function () {
                                  timer(minutes - 1, 59);
                              }, 1000);
                          } else {
                            mainQuestions.removeChild(countdown);
                            stopRecording();


                          }

                      }
                  
                }
                  tick();
              }
              }
          
              timer(5, 0); // поставить 5 мин
                


                var pauseButton = document.getElementById('pauseButton');

                pauseButton.onclick = function togglePauseResume(){
                  if(pauseButton.textContent === "Поставить на паузу"){
                      mediaRecorder.pause();
                      
                      clearTimeout(timeoutHandle);
                      timeoutHandle = undefined;
                      pauseButton.textContent = "Продолжить запись";
                  } else {
                      mediaRecorder.resume();
                      timer(timeForFunction[0], timeForFunction[1]);
                      pauseButton.textContent = "Поставить на паузу";
                  }
                }

                var stopButton = document.getElementById('stopButton');


                stopButton.addEventListener('click', stopRecording);
                 function stopRecording() {
                  mediaRecorder.stop();
                  
                  var recordedVideoTemp = document.getElementById('recordedVideoTemp');
                  var cloneRecordedVideo = recordedVideoTemp.content.cloneNode(true);
                  mainQuestions.appendChild(cloneRecordedVideo);
                  var recordFigure = document.getElementById('recordVideoFigure');
                  var recordedFigure = document.getElementById('recordedVideoFigure');
                  mainQuestions.replaceChild(recordedFigure, recordFigure);


                    //поменять кнопки
                  var nextQuestionTemp = document.getElementById('nextQuestionTemp');
                  var cloneNextQuestion = nextQuestionTemp.content.cloneNode(true);
                  mainQuestions.appendChild(cloneNextQuestion);
                  mainQuestions.removeChild(stopButton);
                  mainQuestions.removeChild(pauseButton);
                  


                  var superBuffer = new Blob(recordedBlobs, {type: 'video/webm'}); //показать записанное видео
                  recordedVideo.src = window.URL.createObjectURL(superBuffer);




                    // var recordedVideo = document.querySelector('#recordedVideo');
                    // recordedVideo.controls = true;                                      ///панель видео



                  var play = document.querySelector('.play__img');
                  play.onclick = function play(){
                    document.querySelector('.play').style.display = "none";
                    recordedVideo.style.filter = "none";
                    recordedVideo.play();
                    recordedVideo.onended = function(){
                      document.querySelector('.play').style.display = "flex";
                      recordedVideo.style.filter = "grayscale(1) brightness(0.45) contrast(1.05)";
                    }
                  }
                                  //record again
                var recordAgain = document.getElementById('recordAgain');
               recordAgain.onclick = function recordVideoAgain(){
                //  var questionsSection = document.querySelector('.main__questions');
                    main.removeChild(mainQuestions);
                    viewQuestionsPage();


                  }
                  
                
                //record again

                

                
              }

              
                  }
           
               


            function startRecording() {
              var options = {mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 100000};
              
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
              

              function handleDataAvailable(event) {
                if (event.data && event.data.size > 0) {
                    recordedBlobs.push(event.data);
                }
              }
              mediaRecorder.ondataavailable = handleDataAvailable;
              mediaRecorder.start(10); // collect 10ms of data
              console.log('MediaRecorder started', mediaRecorder);
                
            }
          
          

            //  here media recorder end

 

        }
       





        }
      }
       

      // window.onblur = function stopStream(){
      //   stream.getVideoTracks()[0].stop();
      //   console.log('stop stream');
      //   window.onblur = function(){
          

      //   }
      // }
      
    }
      
    function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
    }
}



