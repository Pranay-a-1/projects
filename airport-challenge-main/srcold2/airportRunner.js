const Airport = require('../classes/AirportClass');
const Plane = require('../classes/PlaneClass');
const Status = require('../classes/changeStatus');

class Main {
    static main() {
        let airport = new Airport;
        console.log(airport._capacity);
        airport.weather = 'clear';
        let inputPlaneID = 'PLANE1';
        console.log(airport.landAPlane('PLANE1').includes('PLANE1'));
        console.log(airport.landAPlane('PLANE2').includes('PLANE2'));
        // airport.landAPlane(inputPlaneID);
        // let contains = false;
        // for (const element of airport.listOfLandedPlanes) {
        //     for (const property in element) {
        //         if (element[property] === inputPlaneID) {
        //             contains = true;
        //             break;

        //         }
        //     }

        // }
        // console.log(contains);


        let airport2 = new Airport(2);
        console.log(airport2._capacity);
        console.log(airport2.listOfLandedPlanes.length);
        airport2.listOfLandedPlanes = ['PLANE1', 'PLANE2'];
        console.log(airport2.landAPlane('PLANE3'));

        let airport3 = new Airport;
        console.log(airport3._capacity);

        console.log(airport3.listOfLandedPlanes.length);
        airport3.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3'];
        console.log(airport3.takeOffPlane('PLANE1'));




        inputPlaneID = 'PLANE7';
        let plane7 = new Plane(inputPlaneID);
        Status.changeStatus(plane7);




    }
}

Main.main();