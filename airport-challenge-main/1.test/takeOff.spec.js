const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');
const PLANE = require('../1.classes/classPlane');


console.log('---------takeOFF() tests---------');


let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more changes
//console.log(globalListOfPlanes);

test.it('Test 5. Take Off a plane which is currently landed in airport and give a confirmation', () => {
    // Arrange
    const airport1 = new AIRPORT('airport1');

    airport1.weather = 'clear';//setter for weather

    airport1.copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

    for (let i = 0; i < 4; i++) {
        airport1.landAPlane(airport1.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 to PLANE4

    let testPlaneObject = airport1.copyOfGlobalListOfPlanes[2]; //where planeID =  "PLANE3"

    // Act/Assert
    test.assertEquals(airport1.takeOff(testPlaneObject), `${testPlaneObject.planeID} has Taken Off from airport1!`); //if listOfLandedPlanes includes PLANE1 test should pass
});


test.it('Test 6. Prevent Take Off for a plane which is NOT currently landed in airport', () => {
    // Arrange
    const airport2 = new AIRPORT('airport2');

    airport2.weather = 'clear';//setter for weather

    airport2.copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

    for (let i = 0; i < 4; i++) {
        airport2.landAPlane(airport2.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 to PLANE4

    let testPlaneObject = airport2.copyOfGlobalListOfPlanes[6]; //where planeID =  "PLANE7"

    // Act/Assert
    test.assertEquals(airport2.takeOff(testPlaneObject), `${testPlaneObject.planeID} cannot Take Off as it is NOT currently in landed in the airport`); //if listOfLandedPlanes does not includes PLANE7 test should pass
});


test.it('Test 8. Prevent Take Off for a plane if weather is stormy', () => {
    // Arrange
    const airport3 = new AIRPORT('airport3');

    airport3.weather = 'clear';//setter for weather

    airport3.copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

    for (let i = 0; i < 4; i++) {
        airport3.landAPlane(airport3.copyOfGlobalListOfPlanes[i]);
    } //fills airport3.listOfLandedPlanes with planeID from PLANE1 to PLANE4

    airport3.weather = 'stormy';//setter for weather

    let testPlaneObject = airport3.copyOfGlobalListOfPlanes[6]; //where planeID =  "PLANE7"

    // Act/Assert
    test.assertEquals(airport3.takeOff(testPlaneObject), `${testPlaneObject.planeID} cannot Take Off as current weather is Stormy!`); //if listOfLandedPlanes does not includes PLANE7 and weather is stormy test should pass 
});