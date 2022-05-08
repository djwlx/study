function getUrlParam(sUrl, sKey) {
  var url = sUrl;
  var a = url.split("?")[1].split("#")[0].split("&");
  var obj = {};
  a.forEach(function (item) {
    var d = item.split("=");
    // console.log(d);
    if (d[0] in obj) {
      var tamp = obj[d[0]];
      if (!(tamp instanceof Array)) tamp = tamp.split(",");
      tamp.push(d[1]);
      obj[d[0]] = tamp;
    } else obj[d[0]] = d[1];
  });
  if (sKey == undefined) {
    return obj;
  } else {
    if (sKey in obj) return obj[sKey];
    else return "";
  }
}
console.log(
  getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe")
);
