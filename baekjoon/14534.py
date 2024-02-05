from itertools import permutations

for i in range(1, int(input()) + 1):
    pList = list(permutations(list(input())))
    print(f'Case # {i}:')
    for val in pList:
        print(''.join(val))