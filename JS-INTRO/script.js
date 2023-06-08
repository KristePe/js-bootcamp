// First function: If statements

function isPositive (number) {
    return number > 0 ? "The number is positive." : "The number is not positive.";
  };
  
  // Second function: Function takes at least 3 arguments.
  function calculateAverage (...numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
  };
  
  // Third function: Use Object key & value pairs in it.
  function getFormattedPerson (person)  {
    const { name, age, occupation } = person;
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  };
  
  // Testing the functions
  console.log(isPositive(5)); // Output: The number is positive.
  console.log(calculateAverage(2, 4, 6)); // Output: 4
  console.log(
    getFormattedPerson({
      name: "John Johny",
      age: 30,
      occupation: "Driver"
    })
  );
  // Output: Name: John Johny, Age: 30, Occupation: Driver


