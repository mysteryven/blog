export default function checkInclusion(s1: string, s2: string): boolean {
  let i = 0;
  let j = s1.length - 1;
  let count = new Array(26).fill(0);
  let aCode = "a".charCodeAt(0);

  for (let k = 0; k < s1.length; k++) {
    let index1 = s1.charCodeAt(k) - aCode;
    let index2 = s2.charCodeAt(k) - aCode;
    count[index1]++;
    count[index2]--;
  }

  if (allZero(count)) {
    return true;
  }

  for (let j = s1.length; j < s2.length; j++) {
    count[s2.charCodeAt(j) - aCode]--;
    count[s2.charCodeAt(j - s1.length) - aCode]++;

    if (allZero(count)) {
      return true;
    }
  }

  return false;
}

function allZero(map: number[]) {
  for (let k = 0; k < map.length; k++) {
    if (map[k] !== 0) {
      return false;
    }
  }

  return true;
}
