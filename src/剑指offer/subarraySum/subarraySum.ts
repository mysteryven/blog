export default function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    let count = 0;
    let map = new Map<number, number>([[0, 1]]);

    for (let num of nums) {
        sum += num;
        count += (map.get(sum - k) || 0)
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};