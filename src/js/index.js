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
        
        timer(1, 30); 


    }
    var timeoutHandle;
        function timer(minutes, seconds) {
            function tick() {
                var counter = document.getElementById("time");
                counter.innerHTML =
                    minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                seconds--;
                if (seconds >= 0) {
                    timeoutHandle = setTimeout(tick, 1000);
                } else {
                    if (minutes >= 1) {
                        setTimeout(function () {
                            timer(minutes - 1, 59);
                        }, 1000);
                    } else {
                    callMe();


                    }

                }
            }
            tick();
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

}
