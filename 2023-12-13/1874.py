import sys

n = int(sys.stdin.readline())
datas = [int(sys.stdin.readline()) for _ in range(n)]

def solution (n, datas):
    nStack = []
    stackCount = 1
    commandStack = []

    for currentValue in datas:
        while (stackCount <= currentValue):
            nStack.append(stackCount)
            stackCount += 1
            commandStack.append('+')
            
        poppedValue = nStack.pop();

        if poppedValue != currentValue:
            print('NO')
            return
        commandStack.append('-')

    print('\n'.join(commandStack));

solution(n, datas)
