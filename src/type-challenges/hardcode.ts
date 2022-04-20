function getType(obj: unknown) {
    const str = Object.prototype.toString.call(obj);
    const reg = /\[object\s(?<x>\w+)\]/
    return str.match(reg)?.groups?.x;
}