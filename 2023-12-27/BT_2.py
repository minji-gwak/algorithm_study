n, m = map(int, input().split())
tteokList = sorted(list(map(int, input().split())))

maxHeight = 0
low, high = 0, tteokList[-1]

while low < high:
    cutLen = 0
    mid = (low + high) // 2

    for tLen in tteokList:
        cutLen += tLen - mid if tLen > mid else 0
    
    if m == cutLen:
        maxHeight = mid
        break
    elif m < cutLen:
        low = mid + 1
        maxHeight = max(maxHeight, mid)
    else:
        high = mid
print(maxHeight)