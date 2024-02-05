def dfs(N, cnt = 0):
    for i in range(1, 4):
        cnt = dfs(N - i, cnt) if N - i > 0 else cnt + 1 if N - i == 0 else cnt
    return cnt

T = int(input())
for _ in range(T):
    n = int(input())
    print(dfs(n))