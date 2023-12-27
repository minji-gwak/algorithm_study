# 백준 입력 시간 줄이기
import sys
input = sys.stdin.readline

# 풀이 코드
k, n = map(int, input().split())
lanList = [int(input()) for _ in range(k)]
maxLen = -sys.maxsize - 1
low, high = 1, max(lanList)

while low <= high:
    mid = (low + high) // 2

    cutCnt = 0
    for lan in lanList:
        cutCnt += lan // mid

    if n <= cutCnt:
        maxLen = max(maxLen, mid)
        low = mid + 1
    else:
        high = mid - 1

print(high)