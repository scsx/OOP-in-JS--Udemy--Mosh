// this exercise is now a showcase of bad practices

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function (value) {
            duration = value;
        }
    });
    // the next 3 vars have to be exposed to be accessed by the functions outside (Stopwatch.prototype.____)
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        }
    });
    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        }
    });
}

Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;

    startTime = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

const sw = new Stopwatch();
sw.duration = 10;