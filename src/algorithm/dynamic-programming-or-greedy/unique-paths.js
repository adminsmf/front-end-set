// title: 不同路径
// https://leetcode-cn.com/problems/unique-paths/

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？

// 例如，上图是一个7 x 3 的网格。有多少可能的路径？
// 示例 1:

// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右
// 示例 2:

// 输入: m = 7, n = 3
// 输出: 28
//

// 提示：

// 1 <= m, n <= 100
// 题目数据保证答案小于等于 2 * 10 ^ 9

// 思路：
// 动态规划，转移方程：dp(m, n) = dp(m, n - 1) + dp(m - 1, n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i || !j) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}

// 空间压缩
// # 对二维矩阵进行压缩成一位数组,将最新生成的值覆盖掉旧的值,逐行求解当前位置的最新路径条数！
// # 实质：在于动态计算并替换当前位置下的路径数最新值
// # 状态转移公式变成：f[i] = f[i-1]+f[i]
// # 初始值： f = [1]*m,取横轴
// # f[-1]表示可能路径的总数
// # 空间复杂度：O(n),时间复杂度:O(m*n)
var uniquePaths = function(m, n) {
  const dp = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i || !j) {
        dp[j] = 1
      } else {
        dp[j] = dp[j - 1] + dp[j]
      }
    }
  }
  return dp[n - 1]
}

// case1 输入：m = 3, n = 2 预期：3
console.log(uniquePaths(3, 2))

// case1 输入：m = 7, n = 3 预期：28
console.log(uniquePaths(7, 3))
