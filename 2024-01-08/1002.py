import math

for _ in range(int(input())):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    distance = math.sqrt((x1-x2)**2 + (y1-y2)**2) # 두 원의 거리
    if distance == 0 and r1 == r2 :  # 두 원이 동심원이고 반지름이 같은 경우
        print(-1)
    elif abs(r1-r2) == distance or r1 + r2 == distance:  # 내접, 외접인 경우
        print(1)
    elif abs(r1-r2) < distance < (r1+r2) :  # 두 원이 서로 다른 두 점에서 만나는 경우
        print(2)
    else:
        print(0)  # 만나지 않는 경우
            