# 백트래킹을 이용한 풀이
L, C = list(map(int, input().split()))
sList = sorted(input().split())
pwdList = []

def checkPwd(combi):
    consonants, vowels = 0, 0
    for s in combi:
        if s in ['a', 'e', 'i', 'o', 'u']:
            vowels += 1
        else:
            consonants += 1
    if consonants >= 2 and vowels >= 1:
        return True
    else:
        return False

def backtracking(combi):
    if len(combi) == L:
        if checkPwd(combi):
            pwdList.append(''.join(combi))
            return
    
    for idx in range(len(combi), C):
        if combi[-1] < sList[idx]:
            combi.append(sList[idx])
            backtracking(combi)
            combi.pop()

for i in range(C - L + 1):
    backtracking([sList[i]])
    
print('\n'.join(pwdList))

# 조합을 이용한 풀이
from itertools import combinations

L, C = list(map(int, input().split()))
combiList = list(combinations(sorted(input().split()), L))
pwdList = []

for combi in combiList:
    consonants, vowels = 0, 0
    for s in combi:
        if s in ['a', 'e', 'i', 'o', 'u']:
            vowels += 1
        else:
            consonants += 1
    if consonants >= 2 and vowels >= 1:
        pwdList.append(''.join(combi))

print('\n'.join(pwdList))