import sys
import heapq
input = sys.stdin.readline
N = int(input())
heap = []

for _ in range(N):
    hours, minutes, seconds = map(int, input().split())
    heapq.heappush(heap, (hours, minutes, seconds))

for _ in range(N):
    print(' '.join(map(str, heapq.heappop(heap))))