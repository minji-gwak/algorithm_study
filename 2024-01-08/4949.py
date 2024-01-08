while True:
    s = input()
    if s == '.':
        break
    bracketStack = []
    isBalance = True

    for curr in s:
        if curr == '(' or curr == '[':
            bracketStack.append(curr)
        elif curr == ')' or  curr == ']':
            poppedBracket = bracketStack.pop() if len(bracketStack) > 0 else ''

            if (curr == ')' and poppedBracket != '(') or (curr == ']' and poppedBracket != '['):
                print('no')
                isBalance = False
                break
    
    if isBalance:
        print('yes' if not len(bracketStack) else 'no')