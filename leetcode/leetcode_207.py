from collections import defaultdict

class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        graph = defaultdict(list)
        traced, visited = set(), set()
        for first, finish in prerequisites:
            graph[first].append(finish)

        def dfs(first):
            #  순환 구조이면 False
            if first in traced:
                return False
            # 이미 방문했던 노드이면 True
            if first in visited:
                return True
            
            traced.add(first)
            visited.add(first)
            for next in graph[first]:
                if not dfs(next):
                    return False
            # 탐색 종료 후 순환 노드 삭제
            traced.remove(first)

            return True
        
        # 순환 구조 판별
        for x in list(graph):
            if not dfs(x):
                return False
        return True