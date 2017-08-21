
function foo(input) {
    return input + 6 * 100 / 4 + 21 * input
}

function bar(input) {

    var anotherFunction = function(input) {
        input = input + 3000 * 42 - 423;
        return input + 1000 / 2;
    };

    var andAnotherFunction = function(input) {
        input = 800 + input * input
        return input * 3 * 100 * 4 / 17 + 380;
    };

    var firstValue = anotherFunction(input);
    var secondValue = andAnotherFunction(firstValue);
    return secondValue;
}

function recurse(value) {
    if (value < 100000) {
        return value;
    } else {
        return recurse(value / 20);
    }
}

var value = foo(25);
value = bar(value);

value = recurse(value);

console.log(value);
