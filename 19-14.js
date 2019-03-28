function Stopwatch() {
    // PRIVATE
    let h1 = document.getElementsByTagName('h1')[0];
    let h2 = document.getElementsByTagName('h2')[0];
    let running = false;
    let duration = 0;
    let t;
    let TESTE = function() {
        console.log("factor is");
    }
    function timer() {
        t = setInterval(function() {
            duration++;
            h1.innerHTML = duration + " seconds";
        }, 1000);
    }
    // PUBLIC GETTER
    
    Object.defineProperty(
        this,
        'duration',
        { get() { return duration; },
    });
    // MEMBERS
    this.start = function() {
        h2.innerHTML = 'started';
        if (!running) {
            running = true;
            timer();
        } else {
            h2.innerHTML = 'Watch is already running';
            throw new Error('Watch is already running');
        }
    }; 
    this.stop = function() {
        console.log("stopped");
        if (running) {
            running = false;
            clearInterval(t);
            h1.innerHTML = duration + " seconds have elapsed";
        } else {
            h2.innerHTML = 'Watch is NOT running';
            throw new Error('Watch is NOT running');
        }
    }; 
    this.reset = function() {
        console.log("reset");
        duration = 0;
        h2.innerHTML = 'Watch resetted';
    };
}

// CREATE OBJECT
const sw = new Stopwatch();

// html and feedback
document.getElementById("swstart").addEventListener("click", sw.start);
document.getElementById("swstop").addEventListener("click", sw.stop);
document.getElementById("swclear").addEventListener("click", sw.reset);