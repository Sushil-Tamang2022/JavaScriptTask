// 20. Leap Year Check: Write an `if-else` statement to check if a given year is a leap year. Print "Leap year"
// if true, otherwise "Not a leap year."

let year = 2002

if ((year % 4 === 0 && year % 100 !== 0) || (year %400 === 0)) {
    console.log("leap year")
} else {
    console.log("Not a leap year")
}
