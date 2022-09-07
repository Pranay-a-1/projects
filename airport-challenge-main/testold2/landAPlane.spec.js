const test = require('../test-framework');
const Airport = require('../classes/AirportClass');
const Plane = require('../classes/PlaneClass');

console.log('---------landAPlane() tests---------');
const plane1 = new Plane('PLANE1');
const plane2 = new Plane('PLANE2');
const plane3 = new Plane('PLANE3');
const plane4 = new Plane('PLANE4');
const plane5 = new Plane('PLANE5');
const plane6 = new Plane('PLANE6');
const plane7 = new Plane('PLANE7');
const plane8 = new Plane('PLANE8');
const plane9 = new Plane('PLANE9');
const plane10 = new Plane('PLANE10');

const globalListOfPlanes = [plane1, plane2, plane3, plane4, plane5, plane6, plane7, plane8, plane9, plane10];

let input;

test.it('Test that \'landAPlane\' lands a Plane when instructed', () => {
    // Arrange
    // let listOfPlaneObj = [
    //     new Plane('PLANE1'),
    //     new Plane('PLANE2'),
    // ];
    let airport = new Airport('airport');

    airport.weather = 'clear';
    let inputPlaneID = globalListOfPlanes[2];
    // Act/Assert
    //test.assertEquals(airport.landAPlane(inputPlaneID).includes(inputPlaneID), true); //if listOfLandedPlanes includes PLANE1 test should pass
    let val1;
    airport.landAPlane(inputPlaneID).forEach(obj => {
        if (Object.values(obj).includes(inputPlaneID.inputPlaneID)) {
            val1 = true;
            return val1;
        }
    });



    test.assertEquals(val1, true);
});

test.it('Test that landAPlane() throws an Error if capacity of airport is full.', () => {
    // Arrange
    let airport2 = new Airport('airport2', 2); // sets capacity to just 2
    airport2.weather = 'clear';
    const plane1 = new Plane('PLANE1');
    const plane2 = new Plane('PLANE2');

    airport2.listOfPlaneObj = [
        plane1,
        plane2

    ];

    airport2.listOfLandedPlanes = [airport2.listOfPlaneObj[0], airport2.listOfPlaneObj[1]]; // setting the 2 values to fill the capacity
    // Act/Assert
    test.assertEquals(airport2.landAPlane('PLANE3'), 'Airport capacity full'); // error message
});

test.it('Prevent Landing of a plane which is already landed in airport', () => {
    // Arrange
    let airport3 = new Airport('airport3', 3); // sets capacity to just 2


    airport3.listOfLandedPlanes = [];
    const obj = {};
    obj['PLANE1'] = new Plane('PLANE1');
    airport3.listOfLandedPlanes.push(obj['PLANE1']);
    obj['PLANE2'] = new Plane('PLANE2');
    airport3.listOfLandedPlanes.push(obj['PLANE2']);


    let input = airport3.listOfLandedPlanes.find(Plane => Plane.planeID == 'PLANE2');
    //airport3.listOfLandedPlanes = ['PLANE1', 'PLANE2']; // setting the 2 values to fill the capacity
    airport3.weather = 'clear';
    // Act/Assert
    test.assertEquals(airport3.landAPlane(input), 'PLANE2 has already landed!'); // error message
});



test.it('Prevent landing of a plane if weather is stormy', () => {
    // Arrange
    const airport4 = new Airport;
    input = 'PLANE2';
    airport4.weather = 'stormy'; // setter in airport class
    airport4.listOfLandedPlanes = ['PLANE1', 'PLANE2'];
    // Act/Assert
    test.assertEquals(airport4.landAPlane(input), `${input} cannot Land as current weather is Stormy`);
});