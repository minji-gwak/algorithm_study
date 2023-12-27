n, partList, m, findList = int(input()), sorted(list(map(int, input().split()))), int(input()), list(map(int, input().split()))
answer = []

for find in findList:
    isExist = False
    low, high = 0, n

    while low < high:
        mid = (low + high) // 2
        print(mid)
        if partList[mid] == find:
            isExist = True
            break
        elif partList[mid] < find:
            low = mid + 1
        else:
            high = mid
    answer.append('yes' if isExist else 'no')

print(' '.join(answer))