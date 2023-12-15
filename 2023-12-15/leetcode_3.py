class Solution(object):
    def lengthOfLongestSubstring(self, s):
        currStr, end, count = '', 0, 0

        for start in range(len(s)):
            if s[end] in currStr:
                start = currStr.find(s[end]) + 1
                currStr = currStr[start:]
            else:
                count = count if count > len(currStr) else count + 1
            currStr += s[end]
            end += 1
        return count