function isAlienSorted(words: string[], order: string): boolean {
    if (words.length === 1) {
        return true;
    }

    const orderMap = new Map<string, number>();
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }

    for (let i = 0; i < words.length - 1; i++) {
        const isSort = isSorted(words[i], words[i + 1], orderMap);
        if (!isSort) {
            return false;
        }
    }

    return true;
};

function isSorted(s1: string, s2: string, map: Map<string, number>) {
    for (let i = 0; i < s1.length; i++) {
        if (i > s2.length - 1) {
            return false;
        }
    
        const k1 = map.get(s1[i]) as number;
        const k2 = map.get(s2[i]) as number;
        if (k1 > k2) {
            return false;
        }

        if (k1 < k2) {
            return true;
        }
    }

    return true;
}