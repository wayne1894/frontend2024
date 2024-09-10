let x = 1;
let y = 2;

let obj = {
    x, // : x 可省略
    y, // : y 可省略
    drive(){ //簡化 : function ()
        console.log("drive")
    }
}
obj.drive()
//console.log(obj,"obj")

//變數交換
let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a,b)

//解構賦值
const num = [1,2,3];
const [first,second] = num; //es6
// const first = num[0]
// const second = num[1]
console.log(first,second)

//物件解構
const point = {
    xx:1,
    yy:2
}
const {xx:name,yy} = point; //xx 可以改名字，改成 name
// const xx = point.xx
// const yy = point.yy

// const name = point.xx

console.log(name,yy)
