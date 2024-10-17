// number table

const outputDiv = document.getElementById('output'); 
const table = document.createElement('table'); // create table element

// array with 12 numbers
const numbers = Array(12).fill(0).map((_, i) => i + 1);

// forEach (not for loops) for array
numbers.forEach(i => {
    const row = document.createElement('tr'); // table row
    const cell = document.createElement('td'); // table cell
    cell.textContent = i; // Set the cell text to the current number

    // if divisible by 4, add blue background
    if (i % 4 === 0) {
        cell.classList.add('blue-background'); 
    }

    row.appendChild(cell); // add cell 
    table.appendChild(row); // add table
});

outputDiv.appendChild(table); 


