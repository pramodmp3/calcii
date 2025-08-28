let input = document.getElementById("result"); // select the input once

function add(a) {
    input.value += a; // append clicked button value
}

function clear2() {
    input.value = ""; // clear input
}

function del() {
    input.value = input.value.slice(0, -1); // delete last character
}

function finals() {
    try {
        input.value = eval(input.value); // FIXED: evaluate current input
    } catch {
        input.value = "Error"; // handle invalid input
    }
}

// Optional: check if equal button is selected correctly
let equal = document.querySelector(".equals");
console.log(equal);


















// function add(a){
//     input.value=input.value+a;
// }
// add()

// function clear1(){
//     input.value="";
// }
// clear1()

// function delete1(){
//     input.value=input.value.slice(0,-1)
// }
// delete1()

// function final1(){
// input.value=eval(input.value)
// }
// final1()

// let equal= document.querySelector(".equal")
// console.log(equal);