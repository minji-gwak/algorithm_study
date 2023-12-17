# DFS를 이용한 풀이
class Solution:
    def permute(self, nums : int):
        answer = []
        visited = set()

        def dfs(idx, curr = []):
            if len(curr) == len(nums):
                answer.append(curr[:])
                return
            
            for i in range(len(nums)):
                if i not in visited:
                    visited.add(i)
                    curr.append(nums[i])
                    dfs(i, curr)
                    curr.pop()
                    visited.remove(i)
        dfs(0)
        return answer
        

# itertools 라이브러리를 이용한 풀이
import itertools

class Solution:
    def permute(self, nums):
        return list(itertools.permutations(nums))