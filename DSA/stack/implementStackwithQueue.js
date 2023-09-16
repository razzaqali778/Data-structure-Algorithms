//225



class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue2.push(x);
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop() {
    return this.queue1.shift();
  }

  top() {
    return this.queue1[0];
  }

  empty() {
    return this.queue1.length === 0;
  }
}

// Example usage:
const obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top()); // Output: 2
console.log(obj.pop()); // Output: 2
console.log(obj.empty()); // Output: false








