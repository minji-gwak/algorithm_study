from collections import deque

class MyStack(object):
    def __init__(self):
        self.queue = deque()

    def push(self, x):
        self.queue.appendleft(x)

    def pop(self):
        return self.queue.popleft()

    def top(self):
        return self.queue[0]

    def empty(self):
        return True if not self.queue else False