class MyQueue(object):

    def __init__(self):
        self.stack = []

    def push(self, x):
        self.stack.append(x)

    def pop(self):
        return self.stack.pop(0)

    def peek(self):
        return self.stack[0]

    def empty(self):
        return True if not self.stack else False