// 48. Day Check: Write an `if-else` statement to check if today is a weekday (Monday to Friday). Print 
// "Weekday" if true, otherwise "Weekend."

let day = "monDAy"
if (day.toLocaleLowerCase() === "sunday" || day === "saturday") {
    console.log("Weekend")
} else {
    console.log("Weekday")
}