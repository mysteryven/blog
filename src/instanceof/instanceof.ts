export default function instanceOf(proto: any, instance: any) {
  const parent = proto.prototype;
  let child = instance;

  if (parent === undefined) {
    return false;
  }

  while(child !== null) {
    if (child === parent) {
      return true
    } else {
      child = Object.getPrototypeOf(child);
    }
  }

  return false;
}