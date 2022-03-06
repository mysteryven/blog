/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ret = []
  helper(s, 0, s.length - 1, [], ret)

  return ret
};

function helper(s, start, end, p, ret) {
  if (start > end) {
    if (p.length === 4) {
      ret.push(p.join('.'))
    }
    return;
  }

  for (let i = start; i <= Math.min(end, start + 2); i++) {
    let str = s.slice(start, i + 1)
    if (isValidIp(str) && p.length < 4) {
      p.push(str)
      helper(s, i + 1, end, p, ret)
      p.pop()
    }
  }
}

function isValidIp(str) {
  if (str[0] === '0' && str.length > 1) {
    return false;
  }

  let ip = parseInt(str);

  return ip <= 255
}