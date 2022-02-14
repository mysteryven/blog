function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  let bucket = new Map<number, number>();
  let bucketSize = t + 1;

  for (let i = 0; i < nums.length; i++) {
    const id = getBucketId(nums[i], bucketSize);

    if (
      bucket.has(id) ||
      (bucket.has(id - 1) && Math.abs(bucket.get(id - 1)! - nums[i]) <= t) ||
      (bucket.has(id + 1) && Math.abs(bucket.get(id + 1)! - nums[i]) <= t)
    ) {
      return true;
    }

    bucket.set(id, nums[i]);

    if (i >= k) {
      bucket.delete(getBucketId(nums[i - k], bucketSize));
    }
  }

  return false;
}

function getBucketId(num: number, bucketSize: number) {
  return num > 0
    ? Math.floor(num / bucketSize)
    : Math.floor((num + 1) / bucketSize) - 1;
}
