function getType(obj: unknown) {
    const str = Object.prototype.toString.call(obj);
    const reg = /\[object\s(?<x>\w+)\]/
    return str.match(reg)?.groups?.x;
}

function unique1<T>(arr: T[]) {
    return [...new Set(arr)];
}

export function flatten(arr: any[]) {
    let ret = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const items = flatten(arr[i]) 
            items.forEach(item => {
                ret.push(item) 
            });
        } else {
            ret.push(arr[i])
        }
    }

    return ret
}
