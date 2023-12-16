class Solution:
    def letterCombinations(self, digits):
        digitList = list(map(int, list(digits)))
        graph = [[], []]
        answer = []
        cnt = 0
        
        for i in range(1, 9):
            plus = 4 if i == 6 or i == 8 else 3
            graph.append(list(chr(s) for s in range(97 + cnt, 97 + cnt + plus)))
            cnt += plus
        
        def combi(index, str = ''):
            if not digitList:
                return
            if len(str) == len(digitList):
                answer.append(str)
                return
            for char in graph[digitList[index]]:
                combi(index + 1, str + char)

        combi(0)
        return answer;