from collections import Counter

class Solution(object):
    def removeDuplicateLetters(self, s):
        stack = []
        charCounter = Counter(s)

        for char in s:
            charCounter[char] -= 1
            
            if char in stack:
                continue
            while stack and char < stack[-1] and charCounter[stack[-1]] > 0:
                stack.pop()
            stack.append(char)
        return ''.join(stack)