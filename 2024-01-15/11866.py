from collections import deque
n, k = map(int, input().split())
nQueue = deque([i for i in range(1, n + 1)])
answer = []

while len(nQueue):
    for count in range(k - 1):
        nQueue.rotate(-1)  # (k - 1)번 큐를 회전시킨다.
    answer.append(nQueue.popleft()) # k번째에서 사람을 제거한다.

print(f"<{', '.join(map(str, answer))}>")