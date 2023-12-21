class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        self.isHeightBalanced = True

        def dfs(node, height = 0):
            if not node:
                return height
            height += 1
            left, right = dfs(node.left, height), dfs(node.right, height)
            if abs(left - right) > 1:
                self.isHeightBalanced = False
            return max(left, right)

        dfs(root)
        return self.isHeightBalanced