n, m = map(int, input().split())
trees = list(map(int, input().split()))
low, high = 0, max(trees)
maxLen = 0

while low <= high:
    mid = (low + high) // 2

    cutLen = 0
    for tLen in trees:
        if mid < tLen:
            cutLen += tLen - mid

    if m == cutLen:
        maxLen = mid
        break
    elif m < cutLen:
        maxLen = max(mid, maxLen)
        low = mid + 1
    else:
        high = mid - 1

print(maxLen)
