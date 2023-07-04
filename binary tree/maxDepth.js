//Given the root of a binary tree, return its maximum depth.

//A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//class Treenode {
//   constructor(val) {
//     this.value = value;
//     this.left = this.right = null;
//   }
// }

// function builder(arr, index) {
//   if (index >= arr || arr[index] === null) {
//     return null;
//   }

//   const node = new Treenode(arr[index]);

//   node.left = builder(arr, 2 * index + 1);
//   node.right = builder(arr, 2 * index + 2);

//   return node;
// }

//recurrsion
function maxDepth(root) {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//bfs

function maxDepth(root) {
 if (!root) {
    return 0;
  }
  let depth = 0;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  }
  return depth;
}
//Input: root = [3,9,20,null,null,15,7]
//Output: 3
