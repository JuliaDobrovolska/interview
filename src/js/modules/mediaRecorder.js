// var mediaRecorder;


// function toggleRecording() {
//     if (recordButton.textContent === 'Start Recording') {
//       startRecording();
//     } else {
//       stopRecording();
//       recordButton.textContent = 'Start Recording';
//       playButton.disabled = false;
//       downloadButton.disabled = false;
//     }
//   }
//   function startRecording() {
//     var options = {mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 100000};
//     var recordedBlobs = [];
//     try {
//     var mediaRecorder = new MediaRecorder(window.stream, options);
//     } catch (e0) {
//     console.log('Unable to create MediaRecorder with options Object: ', options, e0);
//     try {
//         options = {mimeType: 'video/webm;codecs=vp8', bitsPerSecond: 100000};
//         mediaRecorder = new MediaRecorder(window.stream, options);
//     } catch (e1) {
//         console.log('Unable to create MediaRecorder with options Object: ', options, e1);
//         try {
//         options = 'video/mp4';
//         mediaRecorder = new MediaRecorder(window.stream, options);
//         } catch (e2) {
//         alert('MediaRecorder is not supported by this browser.');
//         console.error('Exception while creating MediaRecorder:', e2);
//         return;
//         }
//     }
//     }
//     console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
//     recordButton.textContent = 'Закончить запись';
//     // mediaRecorder.onstop = handleStop;
//     function handleDataAvailable(event) {
//     if (event.data && event.data.size > 0) {
//         recordedBlobs.push(event.data);
//     }
//     }
//     mediaRecorder.ondataavailable = handleDataAvailable;
//     mediaRecorder.start(10); // collect 10ms of data
//     console.log('MediaRecorder started', mediaRecorder);
// }    

// function stopRecording() {
//   mediaRecorder.stop();
//   console.log('Recorded Blobs: ', recordedBlobs);
//   recordedVideo.controls = true;
// }