function transform(hash: string, length: number) {
  const r = hash.substr(length, 2);
  return parseInt(r, 16);
}
const solve = (hash: string) => {
  let str = '';
  let a = transform(hash, 0);
  for (let i = 2; i < hash.length; i += 2) {
    let l = transform(hash, i) ^ a;
    str += String.fromCharCode(l);
  }
  str = decodeURIComponent(escape(str));
  return str;
};

const solved = solve('hash');
console.log(solved);