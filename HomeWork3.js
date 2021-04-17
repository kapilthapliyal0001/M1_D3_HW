/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let arr = [1,3,5];
let new_arr = [];

for(i = arr.length - 1; i >=0; i--) {
    new_arr.push(arr[i]);
}

console.log(new_arr);

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let max_ele = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > max_ele) {
        max_ele = arr[i];
    }
}

console.log(max_ele);

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

/* WRITE YOUR CODE HERE */
let min_ele = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < min_ele) {
        min_ele = arr[i];
    }
}

console.log(min_ele);


/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* WRITE YOUR CODE HERE */

arr = ["abc", 23, "erv", 32, 42, "ka4"];
let num_arr = [];

for (i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) === false) {
        num_arr.push(arr[i]);
    }
}

console.log(num_arr);

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */

for(i = 0; i < arr.length; i++) {
    if (i+1 % 2 === 0) {
        arr.splice(i, 1);
    }
}
console.log(arr);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

let string = "aeioujnsaocjencoewnoc";

for(i of string) {
    if (i in ['a', 'e', 'i', 'o', 'u']) {
        string.replace(i, "");
    }
}

console.log(string);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */
let arr_new = [1, 57, 743, 7547, 47];
let arr_inc = [];

for (i = 0; i < arr_new.length; i++) {
    arr_inc.push(arr_new[i] + 1);
}
console.log(arr_inc);

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

let str_len = ["strive", "is", "great"];
let str_len_res = [];

for (i of str_len) {
    str_len_res.push(i.length);
}

console.log(str_len_res);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/