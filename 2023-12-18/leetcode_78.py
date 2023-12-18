class Solution:
    def subsets(self, nums):
        answer = []

        def dfs(start = 0, subset = []):
            answer.append(subset)

            for idx in range(start, len(nums)):
                dfs(idx + 1, subset + [nums[idx]])
        dfs()
        return answer