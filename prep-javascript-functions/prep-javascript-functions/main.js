function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(5, 5);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult + ' ' + 'minutes');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log('getGreeting exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return num1 * 5 + num2 * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(5, 10);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 3.14 * 2;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube exercise:', cubeResult);
