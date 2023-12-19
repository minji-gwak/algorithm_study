N = int(input())

dirtyStack = [i for i in range(N, 0, -1)]
washStack, dryStack = [], []
while True:
    cleanCmd, cleanNum = map(int, input().split())
    for _ in range(cleanNum):
        if cleanCmd == 1:
            washStack.append(dirtyStack.pop())
        else:
            dryStack.append(washStack.pop())
    if len(dryStack) == N:
        break
    
print(*dryStack[::-1], sep='\n')
