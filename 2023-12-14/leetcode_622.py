class MyCircularQueue(object):

    def __init__(self, k):
        self.queue = [None] * k
        self.maxLen = k
        self.pFront = 0
        self.pRear = 0

    def enQueue(self, value):
        if self.queue[self.pRear] is None:
            self.queue[self.pRear] = value
            self.pRear = (self.pRear + 1) % self.maxLen
            return True
        else:
            return False

    def deQueue(self):
        if self.queue[self.pFront] is None:
            return False
        else:
            self.queue[self.pFront] = None
            self.pFront = (self.pFront + 1) % self.maxLen
            return True        

    def Front(self):
        return -1 if self.queue[self.pFront] is None else self.queue[self.pFront]
        
    def Rear(self):
        return -1 if self.queue[self.pRear - 1] is None else self.queue[self.pRear - 1]

    def isEmpty(self):
        return self.pFront == self.pRear and self.queue[self.pFront] is None

    def isFull(self):
        return  self.pFront == self.pRear and self.queue[self.pFront] is not None
        