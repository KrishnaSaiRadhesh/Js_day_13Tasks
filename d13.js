// 1.Function Call with Simple Return
 function getMessage() {
    return "Hello, World!";
}

console.log(getMessage())

// 2.Function Call with Parameters
 function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5));

// 3.Function Return with Boolean Check
 function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

// 4.Function with Multiple Return Statements
 function checkSign(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkSign(0));
console.log(checkSign(5));

// 5.Function with Return Inside Loop
function findFirstEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
    }
    return null;
}

console.log(findFirstEven([1, 3, 5, 8]));
console.log(findFirstEven([1, 3, 5]));

// 6.Function Returning an Array
 function getOddNumbers(n) {
    let odds = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
    }
    return odds;
}

console.log(getOddNumbers(5));
console.log(getOddNumbers(10));

// 7.Calling Function in Another Function
 function square(num) {
    return num * num;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log(sumOfSquares(3, 4));

// 8.Function with Nested Conditions
 function numberCategory(num) {
    if (num > 0) {
        if (num % 2 === 0) {
            return "Positive Even";
        } else {
            return "Positive Odd";
        }
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(numberCategory(2));
console.log(numberCategory(-5));

// 9.Function with Ternary Operator
 function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}

console.log(isAdult(20));
console.log(isAdult(15));

// 10.Calling a Function Twice
 function double(x) {
    return x * 2;
}

console.log(double(double(2)));

// 11.Return Object from Function
 function createPerson(name, age) {
    return {name: name, age: age};
}

console.log(createPerson("Alice", 25));

// 12.Calling Function with Default Parameters
 function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet());
console.log(greet("John"));

// 13.Returning Undefined Explicitly
 function doNothing() {
    return;
}

console.log(doNothing());

// 14.Loop with Continue Statement
 function getEvenNumbers(n) {
    let evens = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        evens.push(i);
    }
    return evens;
}

console.log(getEvenNumbers(6));

// 15.Function Inside an Object
 let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(4, 6));

// 16.Return in For Loop
 function getFirstPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            return numbers[i];
        }
    }
    return -1;
}

console.log(getFirstPositive([-3, -2, 1, 2]));

// 17.Return Value from Arrow Function
 let multiply = (a, b) => a * b;

console.log(multiply(3, 4));

// 18.Function with No Return
 function logMessage() {
    console.log("Hello!");
}

logMessage();

// 19.Return in While Loop
 function findFirstDivisibleBy3(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 3 === 0) {
            return numbers[i];
        }
        i++;
    }
    return -1;
}
console.log(findFirstDivisibleBy3([1, 2, 9, 4]));

// 20.Recursive Function Call
 function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// 21.Using Function Expression
 let divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));

// 22.Return Boolean Value
 function isNegative(num) {
    return num < 0;
}

console.log(isNegative(-5));

// 23.Function Call Inside an Array
 let array = [function() { return 1 }, function() { return 2 }];

console.log(array[1]());

// 24.Return Type of Function
 function square(num) {
    return num * num;
}

console.log(typeof square(4));

// 25.Passing Function as Argument
 function runOperation(operation, x, y) {
    return operation(x, y);
}

console.log(runOperation((a, b) => a - b, 7, 2));

// 26.Function with Return Type and Conditional Statement
 function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd(7));

// 27.Function with Loops
 function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; 
    }
    return sum;
}
console.log(sumNumbers(5));
console.log(sumNumbers(3));

// 28.Nested Function with Return
 function outerFunction(x) {
    function innerFunction(y) {
        return x * y;
    }
    return innerFunction;
}

const multiplyBy5 = outerFunction(5);
console.log(multiplyBy5(3));
console.log(multiplyBy5(4));


// 29.Function with While Loop
 function countDown(n) {
    let result = "";
    while (n > 0) {
        result += n + " ";
        n--;
    }
    return result;
}

console.log(countDown(5));
console.log(countDown(3));

// 30.Return Type in Functions Using Do-While Loop
 function printNumbers(n) {
    let i = 1;
    let result = "";
    do {
        result += i + " ";
        i++;
    } while (i <= n);
    return result;
}

console.log(printNumbers(4));
console.log(printNumbers(2));