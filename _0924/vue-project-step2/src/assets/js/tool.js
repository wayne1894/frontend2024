export function moneyFormat(n) {
  if (n == undefined) n = 0;
  var t = Number(n), i, r;
  t = t.toString().replace(/^(\d*)$/, "$1.");
  t = (t + "00").replace(/(\d*\.\d\d)\d*/, "$1");
  t = t.replace(".", ",");
  i = /(\d)(\d{3},)/;
  while (i.test(t)) {
    t = t.replace(i, "$1,$2");
  }
  t = t.replace(/,(\d\d)$/, ".$1");
  r = t.split(".");
  if (r[1] == "00") {
    t = r[0];
  }
  return t;
}