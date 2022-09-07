const test = require('../test-framework');
const Airport = require('../classes/AirportClass');
const Plane = require('../classes/PlaneClass');
const Status = require('../classes/changeStatus');
const CountLandedPlanes = require('../classes/CountLandedPlanes');

console.log('---------Status tests---------');


test.it('Count number of planes landed in the airport accessing through listOfLandedPlanes array elements is equal to the \'isLanded\' status of all planes . Testing with just 1 plane!', () => {
    // Arrange
    let airport = new Airport;
    airport.weather = 'clear';
    //airport.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6'];
    airport.landAPlane('PLANE1');
    let plane1 = new Plane((airport.listOfLandedPlanes)[0]);
    Status.changeStatus(plane1);
    let actualResult = airport.listOfLandedPlanes.length === 1 && plane1.isLanded === true;
    // Act/Assert
    test.assertEquals(actualResult, true); //if listOfLandedPlanes includes PLANE1 test should pass
});

test.it('Count number of planes landed in the airport accessing through listOfLandedPlanes array elements is equal to the \'isLanded\' status of all planes . Testing with multiple planes!', () => {
    // Arrange
    let airport1 = new Airport;
    airport1.weather = 'clear';
    const PlanesToBeLandedForThisTest = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6'];

    PlanesToBeLandedForThisTest.forEach(plane => airport1.landAPlane(plane));



    airport1.listOfLandedPlanes.forEach(plane => Status.changeStatus(new Plane(plane)));

    let statusCount = CountLandedPlanes.count(airport1);


    //Status.changeStatus(plane1);
    let actualResult = airport1.listOfLandedPlanes.length === 6 && statusCount === 6;
    // Act/Assert
    test.assertEquals(actualResult, true); //if listOfLandedPlanes includes PLANE1 test should pass
});