
let count = 75

if (count >= 100){
    console.log(`ye no ${count} hai grade A`)
} else if (count >= 90){
    console.log(`ye no ${count} hai grade B`)
} else if (count >= 80){
    console.log(`ye no ${count} hai grade C`)
} else if (count >= 70){
    console.log(`ye no ${count} hai grade D`)
} else
    console.log(`ye koe bhe no nhe hai`)



let userMarks = 49;

if (userMarks >= 90) {
    console.log(`Student marks are ${userMarks}. Your grade is A+`)
} else if (userMarks >= 80) {
    console.log(`Student marks are ${userMarks}. Your grade is A`)
} else if (userMarks >= 70) {
    console.log(`Student marks are ${userMarks}. Your grade is B+`)
} else if (userMarks >= 60) {
    console.log(`Student marks are ${userMarks}. Your grade is C`)
} else if (userMarks >= 50) {
    console.log(`Student marks are ${userMarks}. Your grade is D`)
}
else {
    console.log(`Student marks are ${userMarks}. Your are Fail.`)
}





let userAge = 18
let name = "sanam"
if (userAge >= 18 && name === "sanam"){
    console.log("you are eligible in cnic")
} else {
    (console.log("you are not eligible in cnic"))
}




const parts = ["boll", "bat", "wicket", "shoes", "bag"]
let collect = "wicket"

if (parts.includes(collect)){
    console.log(`is user na ye part ${collect} purchase kia`)
} else {
    console.log(`is user ne koe part purchase nhe kia`)
}




let Password = "12345"
let userPass = "12345"

let Email = "asdf"
let userEmail = "asdf"

if (Password === userPass || Email === userEmail){
    console.log(`your password & Email is correct`) // hamara output true iga q k mara pass or email dono sahe hai
} else {
    console.log (`your password & Email is not verified`)
}






