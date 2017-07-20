function Fibonacci(n) {
    let firstNum = 1, secondNum = 1, result = 1;
    for (let index = 1; index < n - 2; index++) {
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }
    return result;
}

for (let index = 0; index < 100; index++) {
    console.log(Fibonacci(index));
}