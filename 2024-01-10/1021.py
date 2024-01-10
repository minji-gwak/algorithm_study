from collections import deque

n, m = map(int, input().split())
position = list(map(int, input().split()))
nQueue = deque(i for i in range(1, n + 1))
count = 0

for p in position:
    while p != nQueue[0]: # 큐의 맨앞에 원하는 숫자가 위치할 때까지
        if nQueue.index(p) <= len(nQueue) // 2:
            nQueue.rotate(-1) # 왼쪽에서 더 가까울 때 2번 연산 실행
        else:
            nQueue.rotate(1) # 오른쪽에서 더 가까울 때 3번 연산 실행
        count += 1
    
    nQueue.popleft() # 맨앞에 위치했을 때 1번 연산 실행

print(count)