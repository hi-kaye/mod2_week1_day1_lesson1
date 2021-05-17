let date = new Date()
let day = String(date.getDay())

function checkDay(day) {
    switch(day) {
        case "1":
            task = "Today is Monday - Set goals for the week"
            break
        case "2":
            task = "Today is Tuesday - Prepare for engineering meetings"
            break
        case "3":
            task = "Today is Wednesday - Focus day"
            break
        case "4":
            task = "Today is Thursday - Check in on goals and adjust plans"
            break
        case "5":
            task = "Today is Friday - Almost the weekend! Finish any pending tasks before 5pm."
            break
        case "6":
            task = "Today is Saturday - See friends!"
            break
        case "0":
            task  = "Today is Sunday - Cry about Monday"
            break
    }
    return task
}

console.log(checkDay(day))