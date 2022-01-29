export default function minWindow(s, t) {
    let map = new Map();
    let start = 0;
    let end = 0;
    let minStart = 0;
    let minEnd = 0;
    let minLength = Infinity;

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    let count = map.size;

    // end 计算到了边界后，如果此时 count === 0，start 指针可能还能缩小
    // 所以加了后面那个判断条件
    while (end < s.length || (count === 0 && end === s.length)) {
        if(end === s.length) {
            debugger;
        }
        if (count > 0) {
            if (map.has(s[end])) {
                const time = map.get(s[end]);
                map.set(s[end], time - 1);
                if (time === 1) {
                    count--;
                }
            }

            end++;
        } else { // 找到了匹配的
            const gap = end - start;
            if (gap < minLength) {
                minStart = start;
                minEnd = end;
                minLength = gap;
            }

            if (map.has(s[start])) {
                const time = map.get(s[start]);
                map.set(s[start], time + 1);
                // 第一次出现，就加个 count;
                if (time === 0) {
                    count++;
                }
            }

            start++;
        }
    }

    return minLength === Infinity ? '' : s.substring(minStart, minEnd);
};