export default function isPalindrome(s: string): boolean {
    let i = 0; 
    let j = s.length - 1;

    while (i < j) {
        if (!isLetterOrChar(s[i])) {
            console.log('yes')
            i++
        } else if (!isLetterOrChar(s[j])) {
            console.log('yes2')
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
    
    function isLetterOrChar(s: string) {
        return (s >= 'a' && s <= 'z') ||
            (s >= 'A' && s <= 'Z') ||
            (s >= '0' && s <= '9')
    }
};