function formatPriceString(str) {
  let len = str.length;
  let xiaoshu = '';
  let zhengshu = '';
  let end = '';
  let price = '';
  let is = 0;
  // 小数处理
  if (len >= 9) {
    end = ' 亿元';
    let result = str.slice(-8);
    zhengshu = str.slice(0, len - 8);
    let num = parseInt(result[0] + result[1]);
    if (result[2] >= 5) {
      num += 1;
      if (num >= 100) {
        is = 1;
        num = '00';
      }
    }
    xiaoshu = num.toString();
  } else if (len < 9 && len > 5) {
    end = ' 万元';
    let result = str.slice(-4);
    zhengshu = str.slice(0, len - 4);
    let num = parseInt(result[0] + result[1]);
    if (result[2] >= 5) {
      num += 1;
      if (num >= 100) {
        is = 1;
        num = '00';
      }
    }
    xiaoshu = num.toString();
  } else {
    end = ' 元';
    zhengshu = str;
    xiaoshu = '';
  }
  // 四舍五入到整数位
  if (is === 1) {
    zhengshu = (parseInt(zhengshu) + 1).toString();
  }
  // 三位加逗号
  let endzhengshu = [];
  zhengshu = zhengshu.split('').reverse();
  for (let i = 0; i < zhengshu.length; i++) {
    endzhengshu.push(zhengshu[i]);
    if ((i + 1) % 3 === 0 && i !== zhengshu.length - 1) {
      endzhengshu.push(',');
    }
  }
  endzhengshu = endzhengshu.reverse().join('');
  let dian = str.length > 4 ? '.' : '';
  price = endzhengshu + dian + xiaoshu + end;
  return price;
}

console.log(formatPriceString('10234567'));
