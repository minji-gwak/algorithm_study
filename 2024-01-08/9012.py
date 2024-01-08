for _ in range(int(input())):
    isClose = 0 # 괄호의 닫힘 여부를 확인해줄 변수
    for s in input():
        if s == '(':
            isClose += 1
        elif s == ')':
            isClose -= 1
        
        if isClose < 0:
            print('NO') # 음수가 되면 여는 괄호의 개수보다 닫는 개수가 많아지므로 NO를 출력한다.
            break
    if isClose > 0:
        print('NO') # 문자열의 모든 문자를 확인해본 결과, 양수라면 덜 닫힌 괄호가 있는 것이므로 NO를 출력한다.
    elif isClose == 0:
        print('YES') # 0이라면 VPS이므로 YES를 출력한다.