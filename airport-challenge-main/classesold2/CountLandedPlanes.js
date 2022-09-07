class CountLandedPlanes {
    static count(AirportObj) {
        let counter = 0;
        let planeObj;
        for (let i = 0; i < AirportObj.listOfLandedPlanes.length; i++) {

            planeObj = window[AirportObj.listOfLandedPlanes[i]];
            if (planeObj.isLanded === true) {
                counter++;
                return counter;


            }
        }
    }
}

module.exports = CountLandedPlanes;