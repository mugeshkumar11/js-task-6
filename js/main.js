//text color change random

// let text=document.getElementById("text");

// let toggleBtn = document.getElementById("togglebtn");

// let result ="";

// function randomColors() {
    
//     result = Math.ceil(Math.random()*260)
//     text.style.color= "#" + result;
//   }
// toggleBtn.addEventListener('click', randomColors);



//1 to 15 even number loop

// var input = 15;

// for(let i=0; i<=input; i++){
//     if(i%2==0){
//         console.log("even number ", i);
//     }

// }

//1 to 100 cube number


// var input = 4;
// var sum = 0;

// for (let i=0; i<=input; i++){
//     sum += i**3;
//     console.log(sum);
// }


//123 to 321 for three two one

// var input = 123;

// while(input> 0){

// let rem = input%10
// input = ((input-rem)/10)

// if(rem==1){
//  console.log("one");
// }else if(rem==2){
//  console.log("two");
// }else if(rem==3){
//  console.log("three");
// }else if(rem==4){
//  console.log("four");
// }else if(rem==5){
//  console.log("five");
// }else if(rem==6){
//  console.log("six");
// }else if(rem==7){
//  console.log("seven");
// }else if(rem==8){
//  console.log("eght");
// }else if(rem==9){
//  console.log("nine");
// }else
// console.log("zero");


// };

//array for vowels method

var input2 = ["mugeshkumar"];
var count =0;
for(let i=0; i<input2.length; i++){
  if(input2[i]=="a" ||input2[i]=="e" ||input2[i]=="i" ||input2[i]=="o" ||input2[i]=="u" ){
             count ++;
  }
 
}
console.log(count);




