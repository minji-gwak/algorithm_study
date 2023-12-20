class Solution:
    def longestUnivaluePath(self, root):
        self.longest = 0
        def dfs(node):
            if not node: return 0

            leftCnt, rightCnt = dfs(node.left), dfs(node.right)
            if node.left and node.val == node.left.val:
                leftCnt += 1
            else:
                leftCnt = 0
            if node.right and node.val == node.right.val:
                rightCnt += 1
            else:
                rightCnt = 0
            self.longest = max(self.longest, leftCnt + rightCnt)
            return max(leftCnt, rightCnt)
            
        dfs(root)
        return self.longest