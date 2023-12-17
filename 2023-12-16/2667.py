N = int(input())
graph = [list(input()) for _ in range(N)]
dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
global houseCnt
houseCnt = 0
blockCnt = []

def dfs (x, y):
    if x < 0 or x >= N or y < 0 or y >= N:
        return False
    if graph[x][y] == '1':
        global houseCnt
        houseCnt += 1
        graph[x][y] = 0

        for n in range(4):
            nx = x + dx[n]
            ny = y + dy[n]
            dfs(nx, ny)
        return True
    return False

for i in range(N):
    for j in range(N):
        if dfs(i, j) == True:
            blockCnt.append(houseCnt)
            houseCnt = 0

blockCnt.sort()
print(str(len(blockCnt)), *blockCnt, sep='\n');