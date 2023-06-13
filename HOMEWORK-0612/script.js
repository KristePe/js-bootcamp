myArray = [
  { id: 45, fruit: "banana" },
  { id: 96, fruit: "pineapple" },
  { id: 6, fruit: "apple" },
  { id: 78, fruit: "passionfruit" },
  { id: 80, fruit: "orange" },
  { id: 44, fruit: "peach" },
];

// .Map
const mapArray = [];
for (let i = 0; i < myArray.length; i++) {
  mapArray[mapArray.length] = myArray[i].id * 2;
}
console.log(mapArray);

//.Filter
const filterArray = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].id > 60 && myArray[i].fruit) {
    filterArray[filterArray.length] = myArray[i];
  }
}
console.log(mapArray);

//.every
const everyArray = [];
for (let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
   
    console.log(item.fruit);

//.some
const found = false;
for (let i = 0; i < myArray.length; i++) {
  let item = myArray[i];
 
  if (item.id === 78) {
    found = true;
    break;
  }
}

console.log(found); // Output: true

//.reduce
