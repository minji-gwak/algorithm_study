import math

# 중복을 허용하지 않고 m개 중 n개를 선택하면 된다 => 조합
# 공식 : nCr = n! / (r! * (n - r)!)
for _ in range(int(input())):
    n, m = map(int, input().split())
    bridgeCnt = math.factorial(m) // (math.factorial(n) * math.factorial(m - n))

    print(bridgeCnt)