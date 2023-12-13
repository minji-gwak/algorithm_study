import sys
L = int(sys.stdin.readline())
datas = [sys.stdin.readline().rstrip() for _ in range(L)]

def solution (n, datas):
    for i in range(n):
        command = datas[i]
        sum = 0
        
        for j in range(len(command)):
            if command[j] == "(":
                sum += 1
            else:
                sum -= 1

            if sum < 0:
                print("NO")
                break

        if sum > 0:
            print("NO")
        elif sum == 0:
            print("YES")

solution(L, datas)