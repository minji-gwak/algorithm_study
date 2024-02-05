from collections import defaultdict
class Solution:
    def findItinerary(self, tickets):
        graph = defaultdict(list)
        route = []

        for departure, arrival in sorted(tickets):
            graph[departure].append(arrival)

        def dfs(start = "JFK"):
            while graph[start]:
                dfs(graph[start].pop(0))
            route.append(start)
        dfs()
        return route[::-1]