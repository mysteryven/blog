export default function countSubstrings(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += countThisSubString(s, i, i);
        count += countThisSubString(s, i, i + 1);
    }

    function countThisSubString(s: string, start: number, end: number) {
        let count = 0;
        while (start >= 0 && end <= s.length) {
            if (s[start] !== s[end]) {
                break;
            }
            count++;
            start--;
            end++;
        }
        return count;
    }

    return count;
};