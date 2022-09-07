const Plane = require('../classes/PlaneClass');

class Airport {
    constructor(_airportID = 'airportID', _defaultCapacity = 10) {

        this.listOfLandedPlanes = []; //default empty airport
        this._capacity = _defaultCapacity;
        this._weather = [];
        this.possibleWeatherConditions = ['stormy', 'clear', 'clear'];
        this.listOfPlaneObj = [];
        this._airportID = _airportID;
    }

    landAPlane(inputPlaneID) {
        let landingMessage;

        //let currentWeather = this._weather[0];
        let currentWeather = this.weather;
        if (this.listOfLandedPlanes.length === this._capacity) {
            const capacityError = new Error('Airport capacity full');
            landingMessage = capacityError.message;
            return landingMessage;
        }
        //if weather stormy
        else if (currentWeather === this.possibleWeatherConditions[0]) {
            landingMessage = `${inputPlaneID} cannot Land as current weather is Stormy`;
            return landingMessage;
        }



        // else if (this.listOfLandedPlanes.length === 0) {
        //     let requiredObj;
        //     this.listOfPlaneObj.forEach(object => {
        //         if (Object.values(object).includes(inputPlaneID)) {
        //             requiredObj = object;
        //             return requiredObj;

        //         }
        //     });
        //     requiredObj.landedAt = this._airportID;
        //     this.listOfLandedPlanes = [...this.listOfLandedPlanes, requiredObj];
        //     // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
        //     return this.listOfLandedPlanes;
        // }




        else if (this.listOfLandedPlanes.length < this._capacity) {
            let requiredObj;
            if (this.listOfLandedPlanes.length > 1) {
                if ()
                    this.listOfPlaneObj.forEach(object => {
                        if (Object.values(object).includes(inputPlaneID.planeID)) {
                            return landingMessage = `${inputPlaneID.planeID} has already landed!`;
                        }
                    });
            }
            this.listOfPlaneObj.forEach(object => {
                if (Object.values(object).includes(inputPlaneID)) {
                    requiredObj = object;
                    return requiredObj;

                }
            });
            requiredObj.landedAt = this._airportID;
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, requiredObj];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        // else if (this.listOfLandedPlanes.includes(inputPlaneID)) {
        //     landingMessage = `${inputPlaneID} has already landed!`;
        //     return landingMessage;
        // }
        // else if (this.listOfLandedPlanes.forEach([(inputPlaneID)) {
        //     landingMessage = `${inputPlaneID} has already landed!`;
        //     return landingMessage;
        // }

        // else if (this.listOfLandedPlanes.forEach(Element => {
        //     if (Object.values(Element).includes(inputPlaneID)) {
        //     })) {
        //     landingMessage = `${inputPlaneID} has already landed!`;
        //     return landingMessage;
        // }

        // else if (this.listOfLandedPlanes.forEach(elementObject => {
        //     if (Object.values(elementObject).includes(inputPlaneID)) {
        //         landingMessage = `${inputPlaneID} has already landed!`;
        //         return true;
        //     }

        // })) {
        //     return landingMessage;
        // }
        else if (this.listOfLandedPlanes.length > 0) {
            this.listOfLandedPlanes.forEach(elementObject => {
                if (Object.values(elementObject).includes(inputPlaneID.planeID)) {
                    return landingMessage = `${inputPlaneID.planeID} has already landed!`;

                }
            });
            return landingMessage;

        }



        // else if ((for (const element of this.listOfLandedPlanes) {
        //     for (const property in element) {
        //         if (element[property] === inputPlaneID) {
        //             landingMessage = `${inputPlaneID} has already landed!`;
        //             break;

        //         }
        //     }

        // })


        else if (this.listOfLandedPlanes.length < this._capacity) {
            this.listOfLandedPlanes = [...this.listOfLandedPlanes, new Plane(inputPlaneID)];
            // console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes;
        }

        // else {
        //     const capacityError = new Error('Airport capacity full');
        //     landingMessage = capacityError.message;
        //     return landingMessage;
        // }

    }

    changeCapacity(newCapacity) {
        this._capacity = newCapacity;
        return this._capacity;
    }

    takeOffPlane(inputPlaneID) {
        let takeOffMessage;
        // looping through listOfLandedPlanes to find index of inputPlaneID
        let indexNumber = this.listOfLandedPlanes.findIndex((currentLandedPlaneID) => {
            return currentLandedPlaneID === inputPlaneID;
        });
        let currentWeather = this._weather[0];
        //if weather stormy
        if (currentWeather === this.possibleWeatherConditions[0]) {
            takeOffMessage = `${inputPlaneID} cannot Take Off as current weather is Stormy`;
            return takeOffMessage;
        }

        else if (indexNumber === -1) {
            takeOffMessage = `${inputPlaneID} cannot Take Off as it is not currently in landed list of planes in the airport`;
            return takeOffMessage;
        }
        else {
            this.listOfLandedPlanes.splice(indexNumber, 1);
            takeOffMessage = `${inputPlaneID} has Taken Off! and ${inputPlaneID} is no longer in the airport!`;
            return takeOffMessage;
        }
    }

    // generates weather condition if this._weather is null
    get weather() {
        // 33.33% chance of stormy weather
        if (this._weather.length === 0) {
            //rand num between 0 and 2;
            let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
            let currentWeather = this.possibleWeatherConditions[rand];
            // console.log(currentWeather);
            this._weather.push(currentWeather);
            return currentWeather;

        }
        else {
            return this._weather[0];
        }

    }

    //sets desired weather condition
    set weather(setWeather) {
        let setWeatherMessage;
        this._weather = []; //clears the array
        setWeather = setWeather.toLowerCase();
        if (setWeather === this.possibleWeatherConditions[0]) {
            this._weather.push(setWeather);
            setWeatherMessage = this._weather[0];
        }
        else if (setWeather === this.possibleWeatherConditions[1]) {
            this._weather.push(setWeather);
            setWeatherMessage = this._weather[0];
        }
        else {
            let err = new Error('Enter valid weather condition either stormy or clear');
            setWeatherMessage = err.message;
            console.log(setWeatherMessage);
        }
    }








}

module.exports = Airport;