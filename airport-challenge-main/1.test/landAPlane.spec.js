const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');
const PLANE = require('../1.classes/classPlane');


console.log('---------landAPlane() tests---------');

let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more changes
//console.log(globalListOfPlanes);

test.it('Test 1. Test that \'landAPlane\' lands a Plane when instructed when airport is empty', () => {
    // Arrange
    const airport1 = new AIRPORT('airport1');

    airport1.weather = 'clear';//setter for weather

    airport1.copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

    let testPlaneObject = airport1.copyOfGlobalListOfPlanes[0]; //where planeID =  "PLANE1"

    // Act/Assert
    //console.log(value1);
    test.assertEquals(airport1.landAPlane(testPlaneObject), `${testPlaneObject.planeID} has now landed!`);

});


test.it('Test 2. Test that \'landAPlane\' lands a Plane when instructed when airport is partially filled', () => {
    // Arrange
    const airport2 = new AIRPORT('airport2');

    airport2.weather = 'clear'; //setter for weather

    airport2.copyOfGlobalListOfPlanes = [...globalListOfPlanes]; //cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.



    for (let i = 0; i < 4; i++) {
        airport2.landAPlane(airport2.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 to PLANE4

    let testPlaneObject = airport2.copyOfGlobalListOfPlanes[4]; //where planeID =  "PLANE5"

    // Act/Assert
    test.assertEquals(airport2.landAPlane(testPlaneObject), `${testPlaneObject.planeID} has now landed!`);
});

test.it('Test 4. Test that `landAPlane()` throws an Error if capacity of airport is full.', () => {
    // Arrange
    const airport3 = new AIRPORT('airport3', 5);

    airport3.weather = 'clear'; //setter for weather

    airport3.copyOfGlobalListOfPlanes = [...globalListOfPlanes]; //cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.



    for (let i = 0; i < 5; i++) {
        airport3.landAPlane(airport3.copyOfGlobalListOfPlanes[i]);
    } //fills airport3.listOfLandedPlanes with planeID from PLANE1 to PLANE5 filling defaultCapacity which is 5 here for airport3

    let testPlaneObject = airport3.copyOfGlobalListOfPlanes[9]; //where planeID =  "PLANE10"

    // Act/Assert
    test.assertEquals(airport3.landAPlane(testPlaneObject), 'Airport capacity full');
});


test.it('Test 7. Prevent Landing of a plane which is already landed in airport.', () => {
    // Arrange
    const airport4 = new AIRPORT('airport4');

    airport4.weather = 'clear'; //setter for weather

    airport4.copyOfGlobalListOfPlanes = [...globalListOfPlanes]; //cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.



    for (let i = 0; i < 5; i++) {
        airport4.landAPlane(airport4.copyOfGlobalListOfPlanes[i]);
    } //fills airport4.listOfLandedPlanes with planeID from PLANE1 to PLANE5 partially filling defaultCapacity which is 10 here for airport4

    let testPlaneObject = airport4.copyOfGlobalListOfPlanes[2]; //where planeID =  "PLANE3"

    // Act/Assert
    test.assertEquals(airport4.landAPlane(testPlaneObject), `${testPlaneObject.planeID} has already landed!`);
});




test.it('Test 9. Prevent landing of a plane if weather is stormy', () => {
    // Arrange
    const airport5 = new AIRPORT('airport5');

    airport5.weather = 'clear'; //setter for weather

    airport5.copyOfGlobalListOfPlanes = [...globalListOfPlanes]; //cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.




    for (let i = 0; i < 5; i++) {
        airport5.landAPlane(airport5.copyOfGlobalListOfPlanes[i]);
    } //fills airport5.listOfLandedPlanes with planeID from PLANE1 to PLANE5 partially filling defaultCapacity which is 10 here for airport5

    airport5.weather = 'stormy'; //setter for weather

    let testPlaneObject = airport5.copyOfGlobalListOfPlanes[2]; //where planeID =  "PLANE8"

    // Act/Assert
    test.assertEquals(airport5.landAPlane(testPlaneObject), `${testPlaneObject.planeID} cannot Land as current weather is Stormy!`);
});