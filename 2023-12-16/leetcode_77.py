# DFS를 이용한 풀이
class Solution:
    def combine(self, n: int, k: int):
        answer = []

        def dfs(start, curr = [], leftCnt = k):
            if not leftCnt:
                answer.append(curr[:])
                return
            for i in range(start, n + 1):
                curr.append(i)
                dfs(i + 1, curr, leftCnt - 1)
                curr.pop()
        dfs(1)
        return answer

# itertools 라이브러리를 이용한 풀이
import itertools

class Solution:
    def combine(self, n: int, k: int):
        return list(itertools.combinations(range(1, n+1), k))