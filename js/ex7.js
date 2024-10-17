// prompt for integers
const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:"); 

// check if inputs are valid integers
const num1 = parseInt(input1, 10);
const num2 = parseInt(input2, 10);

// error messages
const contentDiv = document.getElementById("content");

if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    const errorSpan = document.createElement("span");
    errorSpan.style.color = "red"; // red error text
    errorSpan.style.fontWeight = "bold"; // bold error text
    
    // error message
    errorSpan.innerText = `Error! You must enter integers. You entered "${input1}" and "${input2}". Try again.`;
    contentDiv.appendChild(errorSpan);
} else {
    // Calculate the sum
    const sum = num1 + num2;

    // Create a span element for the result
    const resultSpan = document.createElement("span");
    resultSpan.innerText = `${num1} + ${num2} = ${sum}`; // sum
    resultSpan.style.color = "red"; // set to red
    resultSpan.style.fontWeight = "bold"; // set to bold

    // append to div
    contentDiv.appendChild(resultSpan);
}
