var name = "王小明";

//一般函式
function a(){
    console.log(this.name)
}
a();//第一個 (用window來呼叫)
var teacher = {
    name: "陳緯麟",
    aa : a
}
teacher.aa(); //第二個

//箭頭函式
let aa = () => {
    console.log(this.name)
}
aa()
let teacher2 = {
    name: "李三三",
    aa : aa
}
teacher2.aa()


