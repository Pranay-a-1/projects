const test = require('../test-framework');
const Airport = require('../classes/AirportClass');

console.log('---------changeCapacity() tests---------');

test.it('Test that \'changeAirportCapacity\' changes capacity of airport', () => {
    // Arrange
    let airport = new Airport;
    let newCapacity = 20;
    // Act/Assert
    test.assertEquals(airport.changeCapacity(newCapacity), 20);
});