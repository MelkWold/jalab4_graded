// Starting String
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Part 1: Refactoring Old Code (based on Dylan's solution)
//  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable
// let rows = [] // initialize an array to save the rows into

// Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
    // If comma
    // commas++; // Add to comma counter
  // } else if (csvStr[i] == "\n") {
    // If new line
    // let currentRow = [cell1, cell2, cell3, cell4]; // I would want to save the outcome into to an array than printing it
    // rows.push(currentRow); // At each iteration, this would push the current row into the array
    // Clear previous data for new row
  //   commas = 0;
  //   cell1 = "";
  //   cell2 = "";
  //   cell3 = "";
  //   cell4 = "";
  // } else {
    // for all chars
    // if (commas == 0) {
      // put in the appropriate cell, based on commas
  //     cell1 += csvStr[i];
  //   } else if (commas == 1) {
  //     cell2 += csvStr[i];
  //   } else if (commas == 2) {
  //     cell3 += csvStr[i];
  //   } else {
  //     cell4 += csvStr[i];
  //   }
  // }

  // If last char in string print final cells
  // if (csvStr.length - 1 == i) {
  //   let row_last = [cell1, cell2, cell3, cell4];
  //   rows.push(row_last); // Again, this pushes the last row into the array
  // }
    
  // };
// To display the table without the '' around each cell data, I would like to use the following (I googled this)
  // rows.forEach (row => {
  //   console.log(row.join(" "));
  // })

  // Part 2: Expanding Functionality
// Decide how to determine the number of colums in each row
// The number of columns is equal to the number of commas + 1
  // so declare numberColumns = commas + 1 at the end of the first if conditional 
  // then create the number of cells in rows based on this number. How? 
    // rows.length ==numberColumns

let numberColumns=0; //initialize a variable to store the number of columns
let commas = 0; // Counter variable
let rows = [] // initialize an array to save the rows into
rows.length == numberColumns; // initialize the number of entries in the rows array to be equal to the number of Columns
// Let's determine the total number of rows (lines) in the data
let lines = 0; //declare the total number of lines and initialize
for (let j = 0; j < csvStr.length; j++) {
  if (csvStr[j] == "\n") {
    lines++;
  } else if (csvStr[j] == ",") {
    // If comma and new line
    commas++; // Add to comma counter
    let numberColumnsTotal = commas + 1; // dynamically calculates the total numberColumns based on commas.
    numberColumns = numberColumnsTotal / lines; // calculates the number of colums/data cells per ros
}
};
  console.log(`The total number of rows in the table is ${lines}`);
  console.log(`The total number of columns per row is ${numberColumns}`);
  


// Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     let currentRow = [cell1, cell2, cell3, cell4]; // I would want to save the outcome into to an array than printing it
//     rows.push(currentRow); // At each iteration, this would push the current row into the array
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
//     let row_last = [cell1, cell2, cell3, cell4];
//     rows.push(row_last); // Again, this pushes the last row into the array
//   }
    
//   };
// // To display the table without the '' around each cell data, I would like to use the following (I googled this)
//   rows.forEach (row => {
//     console.log(row.join(" "));
//   })

