module.exports = function check(str, bracketsConfig) {
  console.log(str);
  let i = 0,
      b  = [];

  bracketsConfig.forEach(element => {
    b.push(element.join(''));
  });

  while (i < b.length) {
    if(str.includes(b[i])){
      str = str.replace(b[i], '');
      i = 0;
    } else i++;
  }

  if (str.length === 0) return true;
  else return false;

}
