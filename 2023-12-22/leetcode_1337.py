from collections import Counter
import heapq

class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        heap, answer = [], []
        for idx, row in enumerate(mat):
            heapq.heappush(heap, (Counter(row)[1], idx))

        while k:
            answer.append(heapq.heappop(heap)[1])
            k -= 1
        return answer