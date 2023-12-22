from collections import deque

class Codec:

    def serialize(self, root: TreeNode) -> str:
        data = []
        
        def dfs(node):
            if not node:
                data.append('null')
                return
        
            data.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        
        dfs(root)
        return ' '.join(data)

    def deserialize(self, data : str) -> TreeNode:
        dataQ = deque(data.split())

        def dfs(list):
            if not len(list):
                return
            
            val = list.popleft()
            if val == 'null':
                return None
            
            node = TreeNode(val)
            node.left = dfs(list)
            node.right = dfs(list)
            return node
        
        return dfs(dataQ)