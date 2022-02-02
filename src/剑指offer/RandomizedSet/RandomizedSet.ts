class RandomizedSet {
    private map = new Map();
    private arr: number[] = [];
    constructor() {
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);

        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }

        const lastIndex = this.arr.length - 1;
        const lastVal = this.arr[lastIndex]; 

        const currentIndex = this.map.get(val);
        this.arr[currentIndex] = lastVal;
        this.map.set(lastVal, currentIndex);
        this.map.delete(val);
        this.arr.pop();

        return true;
    }

    getRandom(): number {
        const i = Math.floor(Math.random() * 10) % this.arr.length;
        return this.arr[i];
    }
}