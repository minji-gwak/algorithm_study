sides = [0] * 101

def dp(n):
    if 1<= n <= 3:
        return 1
    elif 4 <= n <= 5:
        return 2
    elif sides[n]:
        return sides[n]
    else:
        sides[n] = dp(n - 1) + dp(n - 5)
        return sides[n]

for _ in range(int(input())):
    n = int(input())
    print(dp(n))