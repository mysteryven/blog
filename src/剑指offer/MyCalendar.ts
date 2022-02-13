class MyCalendar {
  list: Array<number[]>;
  constructor() {
    this.list = [];
  }

  book(start: number, end: number): boolean {
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      if (!(start >= item[1] || end <= item[0])) {
        return false;
      }
    }

    this.list.push([start, end]);

    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
