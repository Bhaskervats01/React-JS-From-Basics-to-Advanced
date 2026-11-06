console.log("Hello Coder Army"); // run krane ke liye node first.js command type kre

// Closure in React
let b=10;

function greet(){
    let a=20;
    let b=30;

    
    function meet(){
        console.log(a);
        console.log(b);

    }
    
    return meet;
}

const num = greet();
num();