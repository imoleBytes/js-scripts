// The rule is 
// accept user integer
// loop through it and print fizz when each iterator is divisible by 3
// print Buzz when divisible by 5
// else print the number


function fizzBuzz() {
    
    userInput = parseInt(prompt("Enter an Integer"))
    for (i=1;i<=userInput;i++){
        if (i%3===0 && i%5===0){
            console.log("fizzBuzz")
        } else if (i%3===0){
            console.log("fizz")
        } else if (i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
        
    }
}

fizzBuzz()