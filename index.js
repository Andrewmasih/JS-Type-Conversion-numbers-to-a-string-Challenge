/*  converting arrays to strings and visa versa and converting number to strings and visa versa, the latter is useful for adjusting colour brightness, programmatically numbering system like binary, octal, and hexadecimal HTML color code for white

Challenge:
1/ convert the decimal number to hexadecimal and store it in a varible, whiteHex

Requirement:
1/ you must include the hashtag in the whiteHex varible and it must be a strings
*/

let white = 16777215;

let whiteHex = "#" + white.toString(16);

console.log(whiteHex);