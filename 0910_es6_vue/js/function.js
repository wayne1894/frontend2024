var name = "王小明";

//一般函式
var teacher = {
    name: "陳緯麟",
    aa : function (){
        console.log(this.name)
    }
}
teacher.aa(); //第二個

//箭頭函式
let teacher2 = {
    name: "李三三",
    aa : () => {
        console.log(this.name)
    }
}
teacher2.aa()


