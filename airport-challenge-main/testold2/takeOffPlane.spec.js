const test = require('../test-framework');
const Airport = require('../classes/AirportClass');

console.log('---------takOffPlane() tests---------');

let input;

test.it('Take Off a plane which is currently landed in airport and give a confirmation', () => {
    // Arrange
    let airport = new Airport;
    input = 'PLANE1';
    airport.listOfLandedPlanes = [input];
    // Act/Assert
    test.assertEquals(airport.takeOffPlane(input), `${input} has Taken Off! and ${input} is no longer in the airport!`); //if listOfLandedPlanes includes PLANE1 test should pass
});

test.it('Prevent Take Off for a plane which is NOT currently landed in airport', () => {
    // Arrange
    let airport1 = new Airport(2);
    input = 'PLANE16';
    airport1.listOfLandedPlanes = ['PLANE1', 'PLANE2']; // setting the 2 values to fill the capacity
    // Act/Assert
    test.assertEquals(airport1.takeOffPlane(input), `${input} cannot Take Off as it is not currently in landed list of planes in the airport`); //if listOfLandedPlanes includes PLANE1 test should pass
});


test.it('Prevent Take Off for a plane if weather is stormy', () => {
    // Arrange
    const airport2 = new Airport;
    input = 'PLANE2';
    airport2.weather = 'stormy'; // setter in airport class
    airport2.listOfLandedPlanes = ['PLANE1', 'PLANE2'];
    // Act/Assert
    test.assertEquals(airport2.takeOffPlane(input), `${input} cannot Take Off as current weather is Stormy`);
});