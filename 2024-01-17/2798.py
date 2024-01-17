# 완전탐색하여 모든 카드 조합을 확인하자.
n, m = map(int, input().split())
cardList = sorted(list(map(int, input().split())))
blackjack = 0

for i in range(n - 2):
    for j in range(i + 1, n - 1):
        for k in range(j + 1, n):
            sum = cardList[i] + cardList[j] + cardList[k]
            # 현재 카드의 합이 m을 넘기지 않으면서 m에 더 가까울 때 sum을 저장하자.
            blackjack = sum if sum <= m and max(blackjack, sum) == sum else blackjack
print(blackjack)