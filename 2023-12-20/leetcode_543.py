class Solution(object):
    def diameterOfBinaryTree(self, root):
        self.edgeCnt = 0 # 가장 긴 리프 - 리프 경로 길이
        
        def dfs(node):
            if not node: return 0
            left, right = dfs(node.left), dfs(node.right)
            self.edgeCnt = max(self.edgeCnt, left + right)
            return max(left, right) + 1

        dfs(root)
        return self.edgeCnt