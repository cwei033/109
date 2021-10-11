// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
let size = 8;
//"" is an empty string that you can fill
let board = "";
for (let y = 0; y < size; y++) { //how many lines there are
  for (let x = 0; x < size; x++) { //how many characters are in each line
    if ((x + y) % 2 == 0) { //if sum of x-coordinate and y-coordinate is divisible by 2, add a space to string
      board += " ";
    } else {
      board += "#"; //otherwise if the sum is odd, print a # to string
    }
  }
  //\n prints a new line
  board += "\n";
}
console.log(board);
