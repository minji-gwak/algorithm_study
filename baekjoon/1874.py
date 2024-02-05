import sys
input = sys.stdin.readline # 백준 입력 시간 단축

n = int(input())
nCnt, isPossible = 1, True # 1부터 n까지의 숫자 카운트 / 수열을 만들 수 있는지 여부
nStack, answer = [], [] # nCnt를 담을 스택 / 답안

for _ in range(n):
    currVal = int(input())

    while nCnt <= currVal: # nCnt가 currVal와 같아질 때까지 스택에 쌓는다.
        nStack.append(nCnt)
        nCnt += 1
        answer.append('+')
    
    poppedVal = nStack.pop() # nCnt > currVal라면 스택에서 꺼내준다.

    if currVal != poppedVal: # 꺼내준 숫자가 currVal와 같지 않다면 스택을 만들 수 없는 것
        isPossible = False
        break
    
    answer.append('-')

print('\n'.join(answer) if isPossible else 'NO')