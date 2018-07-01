(() => {
    "use strict";

    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let result = document.getElementById("result")
    let startTime;
    let elapsedTime;
    let diff;
    let isStarted = false;
    let timerId;

    function countUp() {
        timerId = setTimeout(function(){
            elapsedTime = (Date.now() - startTime)/1000;
            result.textContent = elapsedTime.toFixed(3);
            countUp();
        },10);
        if(isStarted === false){
            clearTimeout(timerId)
            result.textContent = elapsedTime
        }else if(elapsedTime >= 3.5){
            clearTimeout(timerId);
            result.textContent = "";
        }
    }

    start.addEventListener("click", function(){
        if(isStarted === true){
            return;
        }
        isStarted = true;
        elapsedTime = 0;
        result.textContent = "0.000"; 
        startTime = Date.now();
        countUp();
        this.className = "pushed";
        stop.className = "";
        result.className = "";           
    });

    stop.addEventListener("click", function(){
        if (isStarted === false) {
            return;
        }
        isStarted = false;
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        diff = elapsedTime - 10.0;
        if (diff > -1.0 && diff < 1.0){
            result.className = "perfect";
        }
        this.className = "pushed";
        start.className = "";
    });


})();
