class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        self.sum = 0
        def dfs(node):
            if not node:
                return
            if node.val and node.val >= low and node.val <= high:
                self.sum += node.val
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return self.sum