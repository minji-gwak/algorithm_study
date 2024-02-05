N, M = map(int, input().split())
sitePwMap = dict(input().split() for _ in range(N))

print('\n'.join([sitePwMap.get(input()) for _ in range(M)]))