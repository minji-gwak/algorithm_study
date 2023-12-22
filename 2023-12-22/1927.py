import heapq
import sys

input = sys.stdin.readline
heap = []

for _ in range(int(input())):
    num = int(input())
    if not num:
        print(heapq.heappop(heap) if len(heap) else 0)
    else:
        heapq.heappush(heap, num)