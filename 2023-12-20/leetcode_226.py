class Solution:
    def invertTree(self, root) :
            if not root:
                return root            
            left, right = self.invertTree(root.left), self.invertTree(root.right)
            root.left, root.right = right, left
            return root