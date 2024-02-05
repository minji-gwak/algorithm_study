class MyQueue {
  constructor() {
    this.stack = [];
  }
  push = (x) => {
    this.stack.push(x);
  };

  pop = () => {
    return this.stack.shift();
  };

  peek = () => {
    return this.stack[0];
  };

  empty = () => {
    return !this.stack.length;
  };
}
