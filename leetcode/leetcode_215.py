import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = [-n for n in nums]
        heapq.heapify(heap)

        for _ in range(k):
            findKth = -1 * heapq.heappop(heap)
        
        return findKth