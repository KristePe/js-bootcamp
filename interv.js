const myArray = [1, 3, 6, 'John', 'car'];

function countArrNum(arr) {
    return arr.filter( item => typeof item === 'number');
};

const arrNumbs = countArrNum(myArray)

console.log(arrNumbs); // Only numbers from the array
console.log(arrNumbs.length); // How many numbers in the array


