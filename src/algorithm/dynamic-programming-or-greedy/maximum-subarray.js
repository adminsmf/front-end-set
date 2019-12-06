// title: 最大子序和

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return 0
  let dp = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      dp[i] = Math.max(nums[i] + dp[i - 1], nums[i])
    } else {
      dp[i] = nums[i]
    }
  }
  return Math.max.apply(null, dp)
};

// case1 输入：[-2,1,-3,4,-1,2,1,-5,4] 预期：6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// case2 输入：[1,2,3,4] 预期：10
console.log(maxSubArray([1, 2, 3, 4]))