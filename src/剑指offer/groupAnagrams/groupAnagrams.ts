function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        const list = map.get(key)  || []
        list.push(str);
        map.set(key, list);
    }

    return Array.from(map.values());
};