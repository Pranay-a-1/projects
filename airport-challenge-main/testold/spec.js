const { assertEquals } = require('../test-framework');

const { AIRPORT } = require('../src/Airport');
//const { PLANE } = require('../src/Plane');



// Initial arrange
let expectedOutput, actualOutput, result;
let input = [];
let testName = '';

// Test 1
// arrange
testName = 'Test 1 - Add a plane to airport\'s landed planes list where airport is empty';
console.log(testName);
let airport1 = new AIRPORT;

input = 'PLANE1';
expectedOutput = 1;

// act
airport1.weather = 'Clear';
actualOutput = airport1.landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`);

console.log('------------- END of Test 1----------------');

// Test 2

// arrange
testName = 'Test 2 - Add a plane to airport\'s landed planes list where airport has already has few planes landed';
console.log(testName);
let airport2 = new AIRPORT;

airport2.listOfLandedPlanes = ['PLANE1', 'PLANE2'];
input = 'PLANE3';
expectedOutput = 3;

// act
airport2.weather = 'Clear';
actualOutput = airport2.landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`);


console.log('------------- END of Test 3----------------');



// Test 3

// arrange
testName = 'Test 3 - Attempting to add plane to airport\'s landed planes list where airport is already at full capaicity';
console.log(testName);
let airport3 = new AIRPORT;

airport3.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6', 'PLANE7', 'PLANE8', 'PLANE9', 'PLANE10',];
input = 'PLANE11';
let expectedOutput1 = `Airport Capacity FULL, cannot instruct ${input} to land!`;
let expectedOutput2 = `${input} cannot Land as Airport capacity is FULL and current weather is Stormy!`;

//expectedOutput = anyScenario;

// act
actualOutput = airport3.landAPlane(input);
console.log(actualOutput);

// assert

if (assertEquals(expectedOutput1, actualOutput)) {
    result = true;
}
else if (assertEquals(expectedOutput2, actualOutput)) {
    result = true;
}
else {
    result = false;
}


// Report
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 3----------------');




// Test 4

// arrange
testName = 'Test 4 - Change Airport Capacity';
console.log(testName);
let airport4 = new AIRPORT;

// airport3.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];
input = 20;
expectedOutput = `Capacity changed to ${input}!`;

// act
actualOutput = airport4.changeAirportCapacity(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 4----------------')




// Test 5

// arrange
testName = 'Test 5 - Take Off a plane which is currently landed in airport';
console.log(testName);
let airport5 = new AIRPORT;
airport5.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6', 'PLANE7', 'PLANE8', 'PLANE9', 'PLANE10',];
input = 'PLANE5';
expectedOutput = `${input} has Taken Off! and ${input} is no longer in the airport!`;

// act
airport5.weather = "Clear";
actualOutput = airport5.takeOffPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(airport5.listOfLandedPlanes);
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 5----------------')



// Test 6

// arrange
testName = 'Test 6 - Take Off a plane which is NOT currently landed in airport';
console.log(testName);
let airport6 = new AIRPORT;
airport6.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6', 'PLANE7', 'PLANE8', 'PLANE9', 'PLANE10',];
input = 'PLANE11';
expectedOutput = `${input} cannot Take Off as it is not currently in landed list of planes in the airport`;

// act

airport6.weather = "Clear";
actualOutput = airport6.takeOffPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(airport6.listOfLandedPlanes);
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 6----------------');


// Test 7 

// arrange
testName = 'Test 7 - Prevent Take Off for a plane if weather is stormy';
console.log(testName);
let airport7 = new AIRPORT;
airport7.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6'];
input = 'PLANE7';
expectedOutput = `${input} cannot Take Off as current weather is Stormy`;

// act

// as weather is random setting weather as Stormy by using setter 

airport7.weather = 'Stormy';


actualOutput = airport7.takeOffPlane(input);

console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(airport7.listOfLandedPlanes);

//console.log(multipleActualOutput); //logs all instance of take off attempts
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 7----------------');



// Test 8 

// arrange
testName = 'Test 8 - Prevent Landing for a plane if weather is stormy';
console.log(testName);
let airport8 = new AIRPORT;
airport8.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5',];
input = 'PLANE8';
expectedOutput = `${input} cannot Land as current weather is Stormy`;

// act

// as weather is random setting weather as Stormy by using setter 

airport8.weather = 'Stormy';


actualOutput = airport8.landAPlane(input);

console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(airport8.listOfLandedPlanes);

//console.log(multipleActualOutput); //logs all instance of take off attempts
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


console.log('------------- END of Test 8----------------');



// // Test 9 

// // arrange
// testName = 'Test 9 - Count number of landed planes in airport matches the plane\'s status';
// console.log(testName);
// let airport9 = new AIRPORT;
// let plane9 = new PLANE("PLANE9");
// let plane10 = new PLANE("PLANE10");
// let plane11 = new PLANE("PLANE11");


// expectedOutput = 3;

// // act

// // as weather is random setting weather as Stormy by using setter 

// airport9.weather = 'Clear';

// airport9.landAPlane(plane9);
// airport9.landAPlane(plane10);
// airport9.landAPlane(plane11);

// let counter = 0;
// if (plane9._status[0] === 'Landed in Airport') {
//     counter++;
// }
// else if (plane10._status[0] === 'Landed in Airport') {
//     counter++;
// }
// else if (plane11._status[0] === 'Landed in Airport') {
//     counter++;
// }



// actualOutput = counter;

// console.log(actualOutput);

// // assert
// result = assertEquals(expectedOutput, actualOutput);

// // Report
// console.log(airport9.listOfLandedPlanes);

// //console.log(multipleActualOutput); //logs all instance of take off attempts
// console.log(`${testName}: ${result ? 'PASS' : 'FAIL'} `);


// console.log('------------- END of Test 9----------------');