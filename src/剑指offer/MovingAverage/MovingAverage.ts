class MovingAverage {
    private capacity: number;
    private queue: number[];
    private sum: number;
    constructor(size: number) {
        this.capacity = size;
        this.sum = 0;
        this.queue = [];
    }

    next(val: number): number {
        if (this.queue.length >= this.capacity) {
            this.sum -= (this.queue.shift() as number)
        }

        this.queue.push(val);
        this.sum += val; 

        return this.sum / this.queue.length; 
    }
}
