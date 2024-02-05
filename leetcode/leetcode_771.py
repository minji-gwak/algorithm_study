class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        jewelSet = set(list(jewels))
        count = 0
        for s in list(stones):
            print(s);
            count = count + 1 if s in jewelSet else count
        return count