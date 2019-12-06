// title: 最大正方形

// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:

// 输入: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// 输出: 4

// 思路，当我们判断以某个点为正方形右下角时最大的正方形时，那它的上方，左方和左上方三个点也一定是某个正方形的右下角

// 否则该点为右下角的正方形最大就是它自己了。这是定性的判断，那具体的最大正方形边长呢？

// 我们知道，该点为右下角的正方形的最大边长，最多比它的上方，左方和左上方为右下角的正方形的边长多1

// 最好的情况是是它的上方，左方和左上方为右下角的正方形的大小都一样的，这样加上该点就可以构成一个更大的正方形。

// 但如果它的上方，左方和左上方为右下角的正方形的大小不一样，合起来就会缺了某个角落

// 这时候只能取那三个正方形中最小的正方形的边长加1了。

// s假设dpi表示以i,j为右下角的正方形的最大边长，则有

// dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1

// dp[i][j]表示已（i，j）为右下角的正方形的最大的边长

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let dp = [],
    max = 0
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = []
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!+matrix[i][j]) {
        dp[i][j] = 0
      } else if (!i || !j) {
        dp[i][j] = 1
        max = Math.max(max, 1)
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max * max
};

// case1 输入：[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] 预期：4
console.log(maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))

// case2 输入：[] 预期：0
console.log(maximalSquare([]))