// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Part 1: Refactoring Old Code
// N.B. The answer for part 1 is taken from Dylan's solution. I made some modifications on Dylan's answer

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
 // I tried applying the for loops and if...else to answer this question. But after trying to use them a lot and not really succeding in getting what I desired, I decided to use the split method after googling and researching the method and how others use it. 

//Hence, I will use .split() method as it is relatively easier for me.

// Step 1: Let's split the csv string into separate lines using the newline (\n) delimiter
const myRows = csvStr.split("\n"); // splits the csv string into  5 rows using the new line delimiter
console.log(myRows); // checks if the number of rows is 5
console.log(`The number of rows in the csv is: ${myRows.length}`); // check if number of rows in my csv

// Step 2: Let's split the header row (i.e. myRows[0]) using the comma separator
const numColumns = myRows[0].split(",").length; // splits each column into cells in the header row and counts their number
console.log(`The number of columns (a.k.a. headers) in the header row is: ${numColumns}`); // check if number of columns in my csv

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
// Approach

// Step 1: Let's extract the headers from the first row
let headers = myArray[0]; // extracts the headers from the first index of the array
console.log(headers) // check the headers

// Step 2: create a new array to store objects
const myObject =[];

// Step 3: Loop through the array
// for rows
for (let i = 1; i < myArray.length; i++) { //start at i = 1 to skip the header row 
  const currentRow = myArray[i]; // current row of myArray as defined by i
  const element = {}; // empty object for the current row
// to match each value with the header elements
 for (let j = 0; j < headers.length; j++) { // this one matches the values with their respective headers
  const key = headers[j]; // individual header elements as indexed by j
  const value = currentRow[j]; // individual values from the current row as indexed by j
  element[key] = value; // assigns the keys to values
}
myObject.push(element);
};
console.log(myObject);


console.log("==========================================  End of Part 3    =====================================================")

// Part 4: Sorting and Manupulating Data

// 1. Remove the last element from the sorted array.
// use .pop()
myObject.pop();
console.log(myObject);

// 2. Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// use .splice()
let newObject = { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" };
myObject.splice(1,0, newObject);
console.log(myObject);

// 3. Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
let anotherObject = { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" };
myObject.push(anotherObject);
console.log(myObject);

console.log("==========================================  End of Part 4    =====================================================")

// Part 5: Full Circle
// Transform the final set of data back into CSV format.
// I found the following from google search and adapted it to the question

console.log(myObject);
// Step 1: Get the headers of the csv file
const csvHeaders = ["ID", "Name", "Occupation", "Age"];
console.log (csvHeaders);

// Step 2: Start with the header row
let csvFile = csvHeaders.join(",") + "\n"; // join the headers back into the csv format using comma as separator and newline delimiter
console.log(csvFile)

// Step 3: Use for loop to add each object
for (let i =0; i < myObject.length; i++) { // for each row of the object
  const row = myObject[i]; // save each row of my object as row
  const values = [ // extract the values corresponding to the keys (ID, Name, Occupation, Age) and save them
    row.ID,
    row.Name,
    row.Occupation,
    row.Age
  ];
  csvFile += values.join(",") + "\n"; //join the values extracted from each row into the csv file
}

console.log (csvFile);

console.log("==========================================  End of Part 5    =====================================================")