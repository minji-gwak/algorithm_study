const serialize = (root) => {
  const data = [];

  const dfs = (node) => {
    if (node === null) {
      data.push('null');
      return;
    }

    data.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return data.join(' ');
};

const deserialize = (data) => {
  dataList = data.split(' ');

  const dfs = (list) => {
    if (list.length === 0) {
      return;
    }

    const val = list.shift();
    if (val === 'null') {
      return null;
    }

    const node = new TreeNode(val);
    node.left = dfs(list);
    node.right = dfs(list);
    return node;
  };

  return dfs(dataList);
};
