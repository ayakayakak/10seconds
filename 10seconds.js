(() => {
    "use strict";

    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let result = document.getElementById("result")
    let startTime;
    let isStarted = false;

    start.addEventListener("click", function(){
        if(isStarted === true){
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = "pushed";
        stop.className = "";
        result.className = "";
        result.textContent = "0.000";
        setTimeout(() = > {
            result.textContent = "0.001";
            }, 1);
    });

    stop.addEventListener("click", function(){
        if (isStarted === false) {
            return;
        }
        isStarted = false;
        let elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        let diff = elapsedTime - 10.0;
        if (diff > -1.0 && diff < 1.0){
            result.className = "perfect";
        }
        this.className = "pushed";
        start.className = "";
    });


})();
