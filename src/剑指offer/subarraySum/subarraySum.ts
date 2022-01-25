// nums = [1,1,1], k = 2
function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    let val = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        val += nums[right];

        if (val === k) {
            sum++;
        }

        while (left < right && sum > k) {
            left++;
            val -= nums[left-1];
        }

        if (val === k) {
            sum++;
        }
    }


    return sum;
};