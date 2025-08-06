// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// //  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable

// //Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     console.log(cell1, cell2, cell3, cell4); // print new line

//     // Clear previous data for new row
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // for all chars
//     if (commas == 0) {
//       // put in the appropriate cell, based on commas
//       cell1 += csvStr[i];
//     } else if (commas == 1) {
//       cell2 += csvStr[i];
//     } else if (commas == 2) {
//       cell3 += csvStr[i];
//     } else {
//       cell4 += csvStr[i];
//     }
//   }

//   // If last char in string print final cells
//   if (csvStr.length - 1 == i) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

//  How can I tell when a cell ends? commas!!!

// Part 1: Refactoring Old Code 
//  Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0; // Counter variable
let rows = [] // initialize an array to save the rows into

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
  })