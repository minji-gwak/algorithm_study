n = int(input())
stair = [int(input()) for _ in range(n)]
dp = [0] * n

if n <= 2:
    print(sum(stair)) # 계단이 2개 이하일 땐 다 더해서 출력
else: # 계단이 3개 이상일 때
    dp[0] = stair[0]
    dp[1] = stair[0] + stair[1]
    for i in range(2, n):
        dp[i] = max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i])
    print(dp[-1])