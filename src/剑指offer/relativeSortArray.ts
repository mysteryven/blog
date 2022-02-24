function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let count = new Array(10001).fill(0);

  for (let i = 0; i < arr1.length; i++) {
    count[arr1[i]]++;
  }

  let j = 0;
  for (let i = 0; i < arr2.length; i++) {
    while (count[arr2[i]] > 0) {
      arr1[j++] = arr2[i];
      count[arr2[i]]--;
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr1[j++] = i;
      count[i]--;
    }
  }

  return arr1;
}
