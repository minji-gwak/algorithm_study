import sys
from functools import reduce

n, m = int(input()), sys.maxsize # m을 최댓값으로 초기화
isHaveConstructor = False # 생성자의 유무

for constructor in range (1, n):
    # 분해합 생성
    generator = constructor + reduce(lambda x, y: x + y, list(map(int, list(str(constructor)))))

    if n == generator: # 만든 분해합이 n과 같다면 n의 생성자 존재
        isHaveConstructor = True
        m = constructor if min(constructor, m) == constructor else m # 생성자 중 최솟값을 저장한다.
print(m if isHaveConstructor else 0)