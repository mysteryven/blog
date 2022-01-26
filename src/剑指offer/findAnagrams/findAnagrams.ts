export default function findAnagrams(s: string, p: string): number[] {
  let indices: number[] = [];
  let count = new Array(26).fill(0);
  let aCode = String.prototype.charCodeAt.call("a", 0);

  for (let i = 0; i < p.length; i++) {
    count[p.charCodeAt(i) - aCode]++;
    count[s.charCodeAt(i) - aCode]--;
  }

  if (allZero(count)) {
    indices.push(0);
  }

  for (let j = p.length; j < s.length; j++) {
    count[s.charCodeAt(j) - aCode]--;
    count[s.charCodeAt(j - p.length) - aCode]++;
    if (allZero(count)) {
      indices.push(j - p.length + 1);
    }
  }

  return indices;
}

function allZero(map: number[]) {
  for (let k = 0; k < map.length; k++) {
    if (map[k] !== 0) {
      return false;
    }
  }

  return true;
}
