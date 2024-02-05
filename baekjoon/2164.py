# import sys
# datas = int(input())
from collections import deque
datas = 6
def solution (cNum):
    cardList = deque([i + 1 for i in range(cNum)])

    while len(cardList) > 1:
        cardList.popleft()
        cardList.rotate(-1)

    print(cardList.popleft())

solution(datas)