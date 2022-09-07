
const { PLANE } = require('./Plane');



class AIRPORT {

    constructor() {
        this.capacity = 10; //default capacity
        this.listOfLandedPlanes = []; //default empty airport
        this._weather = [];
    }


    // generates weather condition if this._weather is null
    get weather() {
        // 33.33% chance of stormy weather
        if (this._weather.length === 0) {
            let possibleWeatherConditions = ['Stormy', 'Clear', 'Clear'];

            //rand num between 0 and 2;
            let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
            let currentWeather = possibleWeatherConditions[rand];
            // console.log(currentWeather);
            this._weather.push(currentWeather);
            return currentWeather;

        }
        else {
            return this._weather[0];
        }

    }

    //sets desired weather condition
    set weather(weathercond) {
        if (weathercond === 'Stormy') {
            this._weather.push(weathercond);
            this._weather[0] = weathercond;
        }
        else if (weathercond === 'Clear') {
            this._weather.push(weathercond);
            this._weather[0] = weathercond;
        }
        else {
            this._weather[0] = 'Enter valid weather condition either Stormy or Clear';

        }
    }


    landAPlane(inputPlaneID) {
        let currentWeather = this.weather;
        if (currentWeather === 'Stormy' && this.listOfLandedPlanes.length === this.capacity) {
            let message = `${inputPlaneID} cannot Land as Airport capacity is FULL and current weather is Stormy!`;
            return message;
        }
        else if (currentWeather === 'Stormy') {
            let message = `${inputPlaneID} cannot Land as current weather is Stormy`;
            return message;
        }

        // for test 1 user story 1
        else if (this.listOfLandedPlanes.length === 0) {

            this.listOfLandedPlanes.push(inputPlaneID);




            console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);

            return this.listOfLandedPlanes.length;
        }

        //for test 3 user story 3
        else if (this.listOfLandedPlanes.length === this.capacity) {

            let message = `Airport Capacity FULL, cannot instruct ${inputPlaneID} to land!`;

            return (message);
        }


        // for test 2
        //if airport already has few planes landed
        else if (this.listOfLandedPlanes.length > 0) {
            //loops through landed plane's list to check if the landing plane already in it
            this.listOfLandedPlanes.forEach(currentLandedPlaneID => {
                if (currentLandedPlaneID === inputPlaneID) {
                    return console.log(`${inputPlaneID} has already landed!`);
                }
            });
            // if a new plane then push it into listOfLandedPlanes array
            this.listOfLandedPlanes.push(inputPlaneID);

            console.log(`${inputPlaneID} has now landed! Current utilized capacity is ${this.listOfLandedPlanes.length} out of ${this.capacity}!`);
            return this.listOfLandedPlanes.length;
        }

        else {
            // log for test purposes
            return console.log('incorrect code ');
        }

    }


    changeAirportCapacity(newCapacityNumber) {
        this.capacity = newCapacityNumber;
        let message = `Capacity changed to ${this.capacity}!`;
        return message;
    }

    takeOffPlane(inputPlaneID) {
        // looping through listOfLandedPlanes to find index of inputPlaneID
        let indexNumber = this.listOfLandedPlanes.findIndex((currentLandedPlaneID) => {
            return currentLandedPlaneID === inputPlaneID;
        });
        let currentWeather = this.weather;
        //if weather stormy
        if (currentWeather === 'Stormy') {
            let message = `${inputPlaneID} cannot Take Off as current weather is Stormy`;
            return message;
        }
        // if inputPlaneID is not in listOfLandedPlanes array
        else if (indexNumber === -1 && this.weather !== 'Stormy') {
            let message = `${inputPlaneID} cannot Take Off as it is not currently in landed list of planes in the airport`;
            return message;
        }
        // if successfully taken off!
        else {
            this.listOfLandedPlanes.splice(indexNumber, 1);

            let message = `${inputPlaneID} has Taken Off! and ${inputPlaneID} is no longer in the airport!`;
            return message;
        }
    }






}


module.exports = {
    AIRPORT
};