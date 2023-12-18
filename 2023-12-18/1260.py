from collections import deque

N, M, V = list(map(int, input().split()))
graph = [[] for _ in range(N + 1)]
for _ in range(M):
    start, end = list(map(int, input().split()))
    graph[start].append(end)
    graph[end].append(start)

# DFS
def dfs(start, visited = []):
    visited.append(start)
    for next in sorted(graph[start]):
        if next not in visited:
            dfs(next, visited)
    return visited

# BFS
def bfs(start):
    visited = [start]
    q = deque([start])

    while q:
        node = q.popleft()
        for next in sorted(graph[node]):
            if next not in visited:
                visited.append(next)
                q.append(next)
    return visited

# 리스트 출력 형식 변환
def changeStr(numlist):
    return ' '.join(list(map(str, numlist)))

print(changeStr(dfs(V)), changeStr(bfs(V)), sep='\n')