// singleton
// object.create

// object literal

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")
const JsUser = {
    name: "Tara",
    "full name": "Taratarini Patnaik",
    [mySym]: "mykey1",
    [mySym2]: "mykey2",
    age: 18,
    location: "bbsr",
    email: "tara@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "tara.seo01@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "tara.seo02@gmail.com"
// console.log(JsUser)


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])
// console.log(JsUser[mySym2])

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())