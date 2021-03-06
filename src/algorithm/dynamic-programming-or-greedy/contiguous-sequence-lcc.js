// title: 连续数列
// https://leetcode-cn.com/problems/contiguous-sequence-lcci/

// 给定一个整数数组，找出总和最大的连续数列，并返回总和。

// 示例：

// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出： 6
// 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶：

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

// 思路:
// 动态规划思路, dp[i] = max(nums[i]+dp[i-1], nums[i])

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  if (!len) return 0
  const dp = []
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[0] = nums[i]
    } else {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
  }
  return Math.max.apply(null, dp)
}

// case1 输入：[-2,1,-3,4,-1,2,1,-5,4]预期：6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
