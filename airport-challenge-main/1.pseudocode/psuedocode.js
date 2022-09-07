// us1
// create airport class
// create plane class

class AIRPORT {
    constructor(_airportID, _defaultCapacity) {
        this._airportID = _airportID;
        this._capacity = _defaultCapacity;
        this.weather = stormy or clear;
        this.listOfLandedPlanes = [];
        this.globalListOfPlanes = [];

    }

    landAPlane(inputPlaneObj) {
        let landingMessage; // this will hold the an error or a success message

        this._weather;

        if (capacityisfull) {
            return landingMessage = 'Airport capacity full';
        }

        else if (stormy) {
            return landingMessage = 'weather is stormy cannot land the plane';
        }


        else if (this.listOfLandedPlanes.length === 0) {
            inputPlaneObj.landedAt = this_airportID;
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneObj];
            return this.listOfLandedPlanes;
        }

        // else if (this.listOfLandedPlanes.length < this._capacity) {
        //     if (this.listOfLandedPlanes.forEach(elementObject => {
        //         if (Object.values(elementObject).incudes(inputPlaneObj.planeID)) {
        //             landingMessage = "plane already landed"
        //             return landingMessage;
        //         }
        //     }))
        // }

        else if (this.listOfLandedPlanes.length < this._capacity) {
            if (this.listOfLandedPlanes.forEach(elementObject => {
                if (Object.values(elementObject).incudes(inputPlaneObj.planeID)) {
                    //for 2nd if
                    landingMessage = "plane already landed"
                    return landingMessage;
                }
            })) {
                // for 1st if
                return landingMessage;

            }
            //for else if
            inputPlaneObj.landedAt = this_airportID;
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, inputPlaneObj];
            return this.listOfLandedPlanes;
        }



    }
}


class PLANE {
    constructor(_planeID) {
        this.planeID = _planeID;
        this.landedAt = "unknown"; // change this after landing
        // < !-- for changing
        // this.airportId = get airportID from landAPlane function(i.e.this._airportID) -->
    }
}




us2


//User Story - 2

// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate
// ```
// #### Domain Model:

// | object |	property	| message | output |
// | -------| -------------|-------  | ------- |
// | AIRPORT |	capacity	| changeAirportCapacity(@Number) |	@Number |


// #### Tests:

// 1. Test that `changeAirportCapacity` changes capacity of airport



us8 -

    create multiple airports


