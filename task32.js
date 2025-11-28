// 32. Check Month: Write an `if-else` statement to check if a month number corresponds to a month with 
// 31 days. Print "31 days" if true, otherwise "Not 31 days."

let month = 2
if (
        month === 1 || // January
        month === 3 || // March
        month === 5 || //May
        month === 7 || // July
        month === 8 || // August
        month === 10 || // October
        month === 12 // December
    ) {
        console.log("31 days")
    } else {
        console.log("Not 31 days")
    }
