// console.log("T");
// console.log("A");
// console.log("R");
// console.log("A");

// function sayMyName(){
//     console.log("T");
//     console.log("A");
//     console.log("R");
//     console.log("A");
// }
// sayMyName
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Tara")
    // return result
    return number1 + number2
    
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 5)

// console.log("Result :", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Tara"))
// console.log(loginUserMessage())

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Tara"))
// console.log(loginUserMessage())


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// // console.log(loginUserMessage("Tara"))
// console.log(loginUserMessage("tara"))


// function calculateCartPrice(...num1){
//     return num1
// }

// // console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "Tara",
//     price: 999
// }

const user = {
    username: "Tara",
    prices: 999
}



function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArry){
    return getArry[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))