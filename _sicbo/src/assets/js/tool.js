export const sleep = (ms, reason) => {
    let timeoutId;
    console.log("停" + ms/1000 + "秒", reason);
    
    const promise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
            resolve();
        }, ms);
    });

    promise.cancel = () => {
        clearTimeout(timeoutId);
        window.public_sleep = null;
    };

    promise.then(() => {
        //console.log('Sleep finished');
        window.public_sleep = null;
    });

    window.public_sleep = promise;

    return promise;
};
export const wait = ms => {
    return new Promise(resolve => {
         setTimeout(resolve, ms);
    });
}

export const deepCopy = object => {
	let info = "";
	!!object && (info = JSON.parse(JSON.stringify(object)));
	return info;
};

export function commaFormat(val) {
  return val ? (val / 1000 > 1 ? (val / 1000).toFixed(1) + "k" : val) : 0;
}
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
