n = int(input())
# 시간의 합이 최솟값이 되려면 여러번 더해져야 하는 시간일수록 작은 값이어야 한다.
# 즉 오름차순 정렬되어야 한다.
pList = sorted(list(map(int, input().split())))
sum = 0

for i, p in enumerate(pList):
    sum += p * (len(pList) - i)
print(sum)