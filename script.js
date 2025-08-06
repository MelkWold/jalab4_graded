// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Part 1: Refactoring Old Code (based on Dylan's solution)

//  Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0; // Counter variable
let rows = [] // initialize an array to save the rows into
let currentRow = "";
// Loop through string, for loop to have access to the index
for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] == ",") {
    // If comma
    commas++; // Add to comma counter
  } else if (csvStr[i] == "\n") {
    // If new line
    let currentRow = [cell1, cell2, cell3, cell4]; // I would want to save the outcome into to an array than printing it
    rows.push(currentRow); // At each iteration, this would push the current row into the array
    // Clear previous data for new row
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // for all chars
    if (commas == 0) {
      // put in the appropriate cell, based on commas
      cell1 += csvStr[i];
    } else if (commas == 1) {
      cell2 += csvStr[i];
    } else if (commas == 2) {
      cell3 += csvStr[i];
    } else {
      cell4 += csvStr[i];
    }
  }

  // If last char in string print final cells
  if (csvStr.length - 1 == i) {
    let row_last = [cell1, cell2, cell3, cell4];
    rows.push(row_last); // Again, this pushes the last row into the array
  }
    
  };
// To display the table without the '' around each cell data, I would like to use the following (I googled this)
  rows.forEach (row => {
    console.log(row.join(" "));
  });

  console.log("==========================================  End of Part 1    =====================================================")
  // Part 2: Expanding Functionality

 // Approach
// calculate the number of columns in the header; I will use .split() method as it is more straightforward for me

// Step 1: Let's split the csv string into separate lines using the newline (\n) delimiter
const myRows = csvStr.split("\n");
console.log(myRows);
console.log(`The number of rows in the csv is: ${myRows.length}`); // check if number of rows in my csv

// Step 2: Let's split the header row (i.e. myRows[0]) using the comma separator
const numColumns = myRows[0].split(",").length;
console.log(`The number of columns in the header row is: ${numColumns}`); // check if number of columns in my csv

// Step 3: Let's make the array
const myArray = [] // Initialize the array
// use for loop to loop through each of my rows and extract the corresponding column values (cell values)
for (let i =0; i < myRows.length; i++) {
  const myColumns = myRows[i].split(","); // split each row using the comma delimiter and save the value into columns
  myArray.push(myColumns); // push each of the cell values into the array
}

console.log(myArray);

console.log("==========================================  End of Part 2    =====================================================")

// Part 3: Transforming Data
