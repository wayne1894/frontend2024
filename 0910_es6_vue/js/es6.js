const sleep = ms => {
    return new Promise(resolve => {
         setTimeout(resolve, ms);
    });
}

var a = 1;

function demo(){
    console.log(a,"demo")
    return "demo"
}


export {sleep,demo}