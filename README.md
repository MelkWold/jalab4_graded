``Working with Data Collections ``
We will need to create two different data processing algorithms and will involve:
1. Transforming raw data into a formatted array of objects
2. Using the output from the first step to provide a textual report on the data. 

```Objectives```
- Use arrays to store ordered lists of data.
- Use objects to store keyed lists of data.
- Use conditional logic to process data.
- Use loops to handle repetitive tasks. 
- Transform data according to specifications.

```Part 1: Refractoring Old Code```
Instruction: Revist your code from ALAB 308.3.1.

```Part 2: Expanding Functionality```
Instructions:
- Declare a variable that stores the number of columns in each row of data within the csv
- Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data. 
- Store your results in a two-dimensional array (each row should be its own array, with individual entries from each column. Each row should be stored in a parent array, with the heading row located at index 0).
- cache this array in a variable for later use. 

```Part 3: Transforming Data```
In order to make the data more obvious, transform out rows into objects:
- For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value's column. Convert these keys to all lowercase for consistency.
- Store these objects in an array, in the order that they were originally listed.

```Part 4: Sorting and Manipulating Data```
1. Remove the last element from the sorted array
2. Insert the given object at index 1
3. Add the given object to the end of the array

```Part 5: Full Circle```
Transform the final set of data back into CSV format. 