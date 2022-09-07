const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');
const PLANE = require('../1.classes/classPlane');

console.log('---------countPlanesATAirport() tests---------');

let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more push or pop to array but can change properties within the objects
//console.log(globalListOfPlanes);


test.it('Test 10. Count number of planes landed which have an airportID.', () => {
    // Arrange
    const airport1 = new AIRPORT('airport1');

    const airport2 = new AIRPORT('airport2');

    const airport3 = new AIRPORT('airport3');

    const copyOfGlobalListOfPlanesSyncedAcrossAllAirportsInTheWorld = [...globalListOfPlanes];// deep copy think of this array to be same as globalListOfPlanes array but is not frozen and properties can change as planes land at an airport

    airport1.copyOfGlobalListOfPlanes = copyOfGlobalListOfPlanesSyncedAcrossAllAirportsInTheWorld;//reference to the array  

    airport2.copyOfGlobalListOfPlanes = copyOfGlobalListOfPlanesSyncedAcrossAllAirportsInTheWorld; //same for airport2

    airport3.copyOfGlobalListOfPlanes = copyOfGlobalListOfPlanesSyncedAcrossAllAirportsInTheWorld;
    //same for airport3

    airport1.weather = 'clear';
    airport2.weather = 'clear';
    airport3.weather = 'clear';

    // Act


    //landing 2 planes in airport1

    for (let i = 0; i < 2; i++) {
        airport1.landAPlane(airport1.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 and PLANE2

    //landing 1 plane in airport1
    for (let i = 2; i < 3; i++) {
        airport2.landAPlane(airport2.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID PLANE3 


    //landing 5 planes in airport1
    for (let i = 4; i < 9; i++) {
        airport3.landAPlane(airport3.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE5 to PLANE9

    // counting planes where landedAt property are known where in PLANE class is 'flying' if not landed or with 'airportId' if at an airport
    this.counter = 0;
    const countPlanesAtAnAirport = () => {
        copyOfGlobalListOfPlanesSyncedAcrossAllAirportsInTheWorld.forEach(elementObject => {
            if (!Object.values(elementObject).includes('flying')) {
                this.counter++;
            }
        });
    };

    countPlanesAtAnAirport();

    //Assert
    test.assertEquals(this.counter, 8);//(2+1+5 === 8)
});