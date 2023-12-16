computerNum, connectNum = int(input()), int((input()))
graph = [[] for _ in range(computerNum + 1)]
visited = [False] * (computerNum + 1)
visited[1] = True

for _ in range(connectNum):
    start, end = list(map(int, input().split()))
    graph[start].append(end)
    graph[end].append(start)


#  재귀를 활용한 dfs 구현
def dfs(curr, cnt):
    for next in graph[curr]:
        if not visited[next]:
            visited[next] = True
            cnt = dfs(next, cnt + 1)
    return cnt

print(dfs(1, 0));