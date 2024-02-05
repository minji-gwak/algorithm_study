while True:
    s = input()
    if s == '.': # 입력종료 문자
        break

    bracketStack = [] # 여는 괄호들을 담아줄 스택
    isBalance = True # VPS 여부

    for curr in s:
        if curr == '(' or curr == '[': # 여는 괄호가 나왔다면 스택에 쌓아준다.
            bracketStack.append(curr)
        elif curr == ')' or  curr == ']': # 닫힌 괄호가 나온 경우
            # 열린 괄호가 있다면 마지막 열린 괄호를 저장
            poppedBracket = bracketStack.pop() if len(bracketStack) > 0 else ''

            if (curr == ')' and poppedBracket != '(') or (curr == ']' and poppedBracket != '['): # 서로 짝이 맞지 않는 경우 VPS가 아니다.
                print('no')
                isBalance = False
                break
    
    if isBalance: # 남아있는 열린 괄호가 없을 때 VPS가 성립된다.
        print('yes' if not len(bracketStack) else 'no')