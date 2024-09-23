let str="http://localhost:33002/";
let str2=str.substr(0,4).concat(" ",str.substr(7,9)).concat(" ",str.substr(17,5)).split(" ")
console.log(str2)
document.getElementById("result").innerHTML=str2;