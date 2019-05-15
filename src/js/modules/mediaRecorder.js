// let moovieTpl = document.getElementById('moovie');
let xhr = new XMLHttpRequest();
// let MAX_IMAGES = 5;

xhr.responseType = 'json';
xhr.open('GET', './json/questions.json');

xhr.onload = function () {
  var arr = this.response;
  
//   document.querySelector('#btn').onclick = function(fragment){
//     var ul = document.getElementById('ul');
//     if(arr.length != 0){
//       var elem = arr.shift();
//       let currentTpl = moovieTpl.content.cloneNode(true);
//       currentTpl.querySelector('img').src = elem.thumbnailUrl;
//       if(ul.childNodes.length === 0){
//         ul.appendChild(currentTpl);
//       }else {
//         var first = document.querySelector(".li");
//         ul.removeChild(first);
//         ul.appendChild(currentTpl);
//       }
//     }
//   }
console.log(arr);
    
};

xhr.send();

