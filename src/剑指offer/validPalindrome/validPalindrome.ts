export default function validPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            break;
        }
        start++;
        end--;
    }

    return start === end || isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);

};

function isPalindrome(s: string, start: number, end: number) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}