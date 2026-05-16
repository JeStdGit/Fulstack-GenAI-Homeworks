const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

for (let i = 0; i < mixedValues.length; i++) {
  if (mixedValues[i]) {
    console.log("Truthy", mixedValues[i]);
  } else {
    console.log("Falsy", mixedValues[i]);
  }
}

console.log(
  "The value 'false' of type string does not count as a 'Falsy' value because it is a positive value of string (not an empty one) contains an actual letters combines into the word 'false'",
);

console.log(
  "The empty array is also count as truthy because the ToBolean does not checks objects values and immidiatly returns true when object is detected.",
);
