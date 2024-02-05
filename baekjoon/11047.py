n, k = map(int, input().split())
coins, count = [int(input()) for _ in range(n)], 0

while k: # k가 0이 될 때까지 반복한다.
    curr = coins[n - 1] # 가치가 높은 동전부터 확인
    if curr <= k: # k보다 동전의 가치가 같거나 낮아야 계산 가능
        count += k // curr
        k = k % curr
    n -= 1
print(count)