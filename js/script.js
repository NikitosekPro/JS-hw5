// 1. Створіть змінну, що симулює вибір варіанта зі списку.
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
// Використайте switch.

const select = "Чай" 

switch (select) {
    case "Кава":
        console.log("Кава");
        
        break;

    case "Чай":
        console.log("Чай");
        break;

    case "Сік":
        console.log("Сік");
        break;

    default:
        console.log("Chose a drink");
        break;
}

// 2. Створіть змінну для зберігання введеного рядка,
// який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день,
// якщо вихідний — про вихідний.


const dayOfWeek = "friday".toLowerCase();


const workDays = ["monday", "tuseday", "wednesday", "thursday", "friday"];
const weekendDays = ["saturday", "sunday"];


if (workDays.includes(dayOfWeek)) {

    console.log("Це робочий день.");

} else if (weekendDays.includes(dayOfWeek)) {

    console.log("Це вихідний.");

} else {
    console.log("Введено некоректний день тижня.");
}



// 3. Створіть змінну для зберігання номера місяця.
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// Створюємо змінну для зберігання номера місяця
let monthNumber = 6;


if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {

    console.log("Це зима.");

} else if (monthNumber >= 3 && monthNumber <= 5) {

    console.log("Це весна.");

} else if (monthNumber >= 6 && monthNumber <= 8) {

    console.log("Це літо.");

} else if (monthNumber >= 9 && monthNumber <= 11) {

    console.log("Це осінь.");

} else {
    console.log("Введено некоректний номер місяця.");
}


// 4. Створіть змінну для зберігання назви кольору.
// Виводьте повідомлення відповідно до вибраного кольору:
// якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = "red".toLowerCase()

switch (color) {
case "red":
    console.log("stop");
        
        break;

case "yellow":
    console.log("wait");
    
        break;

case "green":
    console.log("go");
            

    default:
    console.log("Sellect any color of traffic light")
    

        break;
}


// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select).
// Виконайте відповідну операцію та виведіть результат.
// У випадку ділення на нуль — виведіть попередження.


const num1 = prompt("Type the first number"); 
const num2 = prompt("Type the second number"); 


const operator = prompt("Chose an option: (+, -, *, /):");


let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        alert(`Result: ${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        alert(`Result: ${num1} - ${num2} = ${result}`);
        break;
    case "*":
        result = num1 * num2;
        alert(`Result: ${num1} * ${num2} = ${result}`);
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            alert(`Result: ${num1} / ${num2} = ${result}`);
        } else {
            alert("Error".toUpperCase());
        }
        break;

        case null:
            if (operator !== true) {
                alert("Reload the page to select an option once again.");
                
            }

    default:
        console.log("Incorrect operator. Please, chose one of those ones: (+, -, *, /).");
}
