let array = [1, 2, 3, 4, 5, 6];
let length = array.length;

document.getElementById("array").innerHTML = array;
document.getElementById("array2").innerHTML = array;

// 1

let arrayCopy = [...array];

for (let i = 0; i < length / 2; i++) {
  let temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[length - 1 - i];
  arrayCopy[length - 1 - i] = temp;
}

document.getElementById("result").innerHTML = arrayCopy;

// 2

let arrayCopy2 = [...array];
let halfLength = Math.trunc(length / 2);
let index = (length % 2 != 0) ? halfLength + 1 : halfLength;

for (let i = 0; i < halfLength; i++) {
  let temp = arrayCopy2[i];
  arrayCopy2[i] = arrayCopy2[index + i];
  arrayCopy2[index + i] = temp;
}

document.getElementById("result2").innerHTML = arrayCopy2;
