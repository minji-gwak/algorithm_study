# DFS를 이용한 풀이
class Solution:
    def permute(self, nums : int):
        answer = []

        if len(nums) == 1:
            return [nums[:]]
        for _ in range(len(nums)):
            prev = nums.pop(0)
            next = self.permute(nums)

            for n in next:
                n.append(prev)
            answer.extend(next)
            nums.append(prev)
        return answer
        

# itertools 라이브러리를 이용한 풀이
import itertools

class Solution:
    def permute(self, nums):
        return list(itertools.permutations(nums))