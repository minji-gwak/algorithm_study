class Solution:
    def topKFrequent(self, nums, k):
        numDict = dict()
        answer = []
        for n in nums:
            numDict.get(n) + 1 if n in numDict else 0
        sortedDict = dict(sorted(numDict.items(), key = lambda x : x[1], reverse=True))
        for i in range(k):
            answer.append(list(sortedDict.keys())[i])
        return answer;