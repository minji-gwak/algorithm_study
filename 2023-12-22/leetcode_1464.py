import heapq

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxHeap = []
        for n in nums:
            heapq.heappush(maxHeap, (-n, n))
        i = heapq.heappop(maxHeap)[1]
        j = heapq.heappop(maxHeap)[1]
        return (i - 1) * (j - 1)