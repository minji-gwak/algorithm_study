from collections import deque

while True:
    n, m, k = list(map(int, input().split()))
    if not n and not m and not k:
        break
    
    caller = deque([i for i in range(1, n + 1)])
    cnt = 1
    for i in range(k):
        while cnt != m:
            cnt += 1
            caller.append(caller.popleft())
        if i == k - 1:
            print(caller[0])
            break
        cnt = 1
        caller.popleft()