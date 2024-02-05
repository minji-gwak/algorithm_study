class Solution(object):
    def dailyTemperatures(self, temperatures):
        stack = []
        waitDates = [0] * len(temperatures)

        for i in range(len(temperatures)):
            while stack and temperatures[stack[-1]] < temperatures[i]:
                lowIdx = stack.pop()
                waitDates[lowIdx] = i - lowIdx
                

            stack.append(i)
        
        return waitDates