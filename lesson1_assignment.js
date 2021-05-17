let date = new Date()
let day = String(date.getDay())

function checkDay(day) {
    switch(day) {
        case "1":
            console.log("Today is Monday")
            console.log("Set goals for the week")
            break
        case "2":
            console.log("Today is Tuesday")
            console.log("Prepare for engineering meetings")
            break
        case "3":
            console.log("Today is Wednesday")
            console.log("Focus day")
            break
        case "4":
            console.log("Today is Thursday")
            console.log("Check in on goals and adjust plans")
            break
        case "5":
            console.log("Today is Friday")
            console.log("Almost the weekend!")
            break
        case "6":
            console.log("Today is Saturday")
            console.log("See friends!")
            break
        case "0":
            console.log("Today is Sunday")
            console.log("Cry about Monday")
            break
        default:
            console.log("sleep")
    }
}

checkDay(day)