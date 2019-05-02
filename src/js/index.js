import Inputmask from 'inputmask';

var getPhoneNumber = document.getElementById('getPhoneNumber');
var formButton = document.getElementById('formButton');
var inputPhone = document.getElementById('inputPhone');
var sectionContent = document.querySelector('.main__content');
var sendPassword = document.getElementById('sendPassword');


   
Inputmask({"mask": "+38 (099) 999-99-99"}).mask(inputPhone);
  


formButton.onclick = function sendCode(){
   
    var phoneNumber = inputPhone.value;
    var cloneSendPasswordForm = sendPassword.content.cloneNode(true);
    sectionContent.replaceChild(cloneSendPasswordForm, getPhoneNumber);
    getPassword(phoneNumber);


    function getPassword(number){
        var firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "На номер " +number+ " был отправлен SMS пароль. Сообщение может прийти в Приват24, Sender или в виде SMS сообщения.";
                
        var secondParagraph = document.getElementById("secondParagraph");
        secondParagraph.innerHTML = 'Через <span id="time">1:30</span> Вы сможете подтвердить вход при помощи звонка.';
        var timeDisplay = document.getElementById("time");
        startTimer(90, timeDisplay);  //// поставить 90


        // var inputPassword = document.getElementById('inputPassword').value;
        // checkPassword(inputPassword);

    }
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            while (--timer === 0) {
                callMe();
            }
        }, 1000);
    }
    function callMe() {

        var callbackTemp = document.getElementById('callbackTemp');
        var cloneCallback = callbackTemp.content.cloneNode(true);
        sectionContent.appendChild(cloneCallback);
        var callback = document.querySelector('.main__callback');
        var secondParagraph = document.getElementById("secondParagraph");
        sectionContent.replaceChild(callback, secondParagraph);
   

        callback.onclick = function call(){
            var callTemp = document.getElementById('callTemp');
            var cloneCallTemp = callTemp.content.cloneNode(true);
            sectionContent.appendChild(cloneCallTemp);
            var mainCall = document.querySelector('.main__call');
            sectionContent.replaceChild(mainCall, callback);

            

        }
        
            
       

    }

    // function checkPassword(password) {
    //     console.log(password.length);
    //     if(Number.isNaN(password) || password === null || password.length === 0) {
    //         var checkButton = document.getElementById('checkPassword');
    //         checkButton.disabled = true;
    //     } 



    // }
    



}
