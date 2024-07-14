document.querySelector(".menu-icon").addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('small-sidebar');
    document.querySelector('.container').classList.toggle('small-container');

});

var mic = document.querySelector(".nav-middle>.mic-icon");
mic.addEventListener('click',voice);

function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event){
        console.log(event);
        document.querySelector(".nav-middle>.search-box>input").value =
        event.results[0][0].transcript;
    }
    recognition.start();
}