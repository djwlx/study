// 动态规划
function climbStairs(n) {
    if (n < 3) {
        return n;
    }
    // dp[n]为上n层楼梯的方法个数
    var dp = [];
    // dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp);
    return dp[n];
}
var a = climbStairs(3);
console.log(a);
