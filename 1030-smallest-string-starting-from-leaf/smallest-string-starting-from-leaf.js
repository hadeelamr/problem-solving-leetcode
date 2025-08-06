/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let smallest = "~";  

    const dfs = (node, path) => {
        if (!node) return;
        path = String.fromCharCode(97 + node.val) + path;

        if (!node.left && !node.right) {
            if (path < smallest) {
                smallest = path;
            }
        }

        dfs(node.left, path);
        dfs(node.right, path);
    };

    dfs(root, "");
    return smallest;
};