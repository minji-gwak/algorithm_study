#  counter를 생각하지 못해서 유감인 풀이
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


# counter를 사용한 풀이
import collections

class Solution:
    def topKFrequent(self, nums, k):
        stack = []

        for topNum, numCnt in collections.Counter(nums).most_common():
            if not k:
                break
            stack.append(topNum)
            k -= 1
        return stack

