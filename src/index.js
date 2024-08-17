function reverse(num){
    let str="";
    for (let i = 1; i < num.toString().length+1; i++) {
        str = str + num.toString().charAt(num.toString().length-i) ;
      };
    return str;
}

const result=reverse(123);
console.log(result);
