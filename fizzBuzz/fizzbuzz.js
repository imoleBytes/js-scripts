// The rule is 
// accept user integer
// loop through it and print fizz when each iterator is divisible by 3
// print Buzz when divisible by 5
// else print the number


function fizzBuzz() {
    let fizzCount = 0
    let buzzCount = 0
    let fizzBuzzCount = 0
    userInput = parseInt(prompt("Enter an Integer"))
    for (i=1;i<=userInput;i++){
        if (i%3===0 && i%5===0){
            fizzBuzzCount++
            console.log("fizzBuzz")
        } else if (i%3===0){
            fizzCount++
            console.log("fizz")
        } else if (i%5===0){
            buzzCount++
            console.log("Buzz")
        }else{
            console.log(i)
        }        
    }
    console.log(`fizz: ${(fizzCount /userInput)*100}%
    Buzz: ${(buzzCount /userInput)*100}%
    fizzBuzz: ${(fizzBuzzCount /userInput)*100}%`)
}

fizzBuzz()