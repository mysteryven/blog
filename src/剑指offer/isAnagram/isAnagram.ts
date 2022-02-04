function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sMap: Record<string, number> = {};
    const tMap: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!sMap[t[i]] || sMap[t[i]] === 0) {
            return false;
        }

        sMap[t[i]] -= 1;
    
    }

    return true;
    
};