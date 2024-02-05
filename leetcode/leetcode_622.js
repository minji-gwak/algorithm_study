class MyCircularQueue {
  constructor(k) {
    this.stack = Array(k);
    this.pFront = this.size = 0;
    this.pRear = this.stack.length - 1;
  }

  enQueue = (value) => {
    if (this.isFull()) {
      return false;
    }
    this.pRear = (this.pRear + 1) % this.stack.length;
    this.stack[this.pRear] = value;
    this.size++;
    return true;
  };

  deQueue = () => {
    if (this.isEmpty()) {
      return false;
    }
    this.pFront = (this.pFront + 1) % this.stack.length;
    this.size--;
    return true;
  };

  Front = () => {
    return this.isEmpty() ? -1 : this.stack[this.pFront];
  };

  Rear = () => {
    return this.isEmpty() ? -1 : this.stack[this.pRear];
  };

  isEmpty = () => {
    return this.size === 0;
  };

  isFull = () => {
    return this.size === this.stack.length;
  };
}
