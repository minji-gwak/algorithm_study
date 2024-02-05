from collections import deque

caseNum = int(input())

for _ in range(caseNum):
    # 문서의 개수 n, 찾는 문서의 인덱스 m
    n, m = map(int, input().split())
    # 문서의 우선순위를 담은 리스트
    priorityQueue = deque((map(int, input().split())))
    # 몇번째로 출력되는지 카운트
    count = 0
    
    while True:
        maxPriority = max(priorityQueue)
        # 현재 첫번째 문서의 우선순위
        firstPriority = priorityQueue.popleft()

        # 첫번째 문서보다 우선순위가 높은게 하나라도 있는 경우
        if maxPriority > firstPriority:
            # 맨 뒤로 재배치
            priorityQueue.append(firstPriority)
            m = len(priorityQueue) - 1 if not m else m - 1

        # 첫번째 문서보다 우선순위가 높은게 없는 경우
        else:
            count += 1 # 인쇄
            if not m:
                print(count)
                break
            m -= 1
