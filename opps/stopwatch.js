// Stopwatch instance
// When watch started and called start() then throw error
// When watch stopped and called stop() then throw errors

function StopWatch() {
    let interval;
    let time = 0;
    let msToTime = function(duration) {
        let milliseconds = Math.floor((duration%1000)/10),
            seconds = Math.floor((duration/1000)%60),
            minutes = Math.floor((duration/(1000*60))%60),
            hours = Math.floor((duration/(1000*60*60))%24);

            hours = (hours < 10) ? "0"+hours : hours;
            minutes = (minutes < 10)? "0"+minutes : minutes;
            seconds = (seconds < 10)? "0"+seconds : seconds;
            milliseconds = (milliseconds < 10)? "0"+milliseconds : milliseconds;
            return hours + ":" + minutes + ":"  + seconds  + ":" + milliseconds;
    }

    let duration = msToTime(time);
    this.start = function () {
        if(interval) {
            throw Error("Timer already started");
        } else {
            clearInterval(interval);
            interval = setInterval(() =>{
                time++;
                duration=msToTime(time);
            });
        }
    };
    this.stop = function () {
        if(!interval) {
            throw Error("Timer not started yet");
        } else {
            duration=msToTime(time);
            clearInterval(interval);
            interval=undefined;
        }
    };
    this.reset = function () {
        clearInterval(interval);
        time=0;
        duration = msToTime(time);
    }
    Object.defineProperty(this,"duration", {
        get: function () {
            return duration;
        },
    })
}

const sw = new StopWatch();