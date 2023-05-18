// Conditionals & Comparisons
function conditionalsAndComparisons() {
    let x = 5;
    let y = 10;
    let output = "";

    if (x > y) {
        output += "x is greater than y";
    } else if (x < y) {
        output += "x is less than y";
    } else {
        output += "x is equal to y";
    }

    // Uncomment the line below to display the output
    // document.getElementById("output").textContent = output;
}

// Loops and Arrays
function loopsAndArrays() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Uncomment the line below to display the sum
    // document.getElementById("output").textContent = "Sum: " + sum;
}

// Array methods: pop, shift, splice, and slice
function arrayMethods() {
    let fruits = ["Apple", "Banana", "Orange", "Mango"];
    let removedItem = fruits.pop(); // Remove the last element

    // Uncomment the lines below to display the modified array and the removed item
    // document.getElementById("output").textContent = "Modified Array: " + fruits.join(", ");
    // document.getElementById("output").textContent += "<br>Removed Item: " + removedItem;

    // Uncomment the lines below to demonstrate other array methods
    // let shiftedItem = fruits.shift(); // Remove the first element
    // fruits.splice(1, 1, "Kiwi"); // Remove and insert elements
    // let slicedItems = fruits.slice(1, 3); // Get a portion of the array
}

// Objects and Methods
function objectsAndMethods() {
    let person = {
        name: "John Doe",
        age: 25,
        greet: function() {
            return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
        }
    };

        // Uncomment the line below to display the greeting
    // document.getElementById("output").textContent = person.greet();
}

// Functions
function functions() {
    function addNumbers(a, b) {
        return a + b;
    }

    // Uncomment the line below to display the result
    // document.getElementById("output").textContent = "Sum: " + addNumbers(5, 10);
}

// Methods
function methods() {
    let calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        }
    };

    // Uncomment the lines below to perform calculations and display the results
    // let sum = calculator.add(5, 10);
    // let difference = calculator.subtract(10, 5);
    // let product = calculator.multiply(5, 10);
    // let quotient = calculator.divide(10, 5);
    // document.getElementById("output").textContent = "Sum: " + sum;
    // document.getElementById("output").textContent += "<br>Difference: " + difference;
    // document.getElementById("output").textContent += "<br>Product: " + product;
    // document.getElementById("output").textContent += "<br>Quotient: " + quotient;
}

// Start Exercise button event listener
document.getElementById("startExercise").addEventListener("click", function() {
    // Uncomment the exercise functions below one by one as you progress through the review
    // conditionalsAndComparisons();
    // loopsAndArrays();
    // arrayMethods();
    // objectsAndMethods();
    // functions();
    // methods();
});
