n, parentList, k = int(input()), list(map(int, input().split())), int(input())
cnt = 0

def dfs(num, list):
    list[num] = None
    for i in range(len(list)):
        if num == list[i]:
            dfs(i, list)

dfs(k, parentList)

for i in range(len(parentList)):
    if parentList[i] != None and i not in parentList:
        cnt += 1
print(cnt)