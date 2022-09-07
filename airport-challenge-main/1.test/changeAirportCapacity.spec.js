const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');



console.log('---------changeAirportCapacity() tests---------');


test.it('Test 3. Test that \'changeAirportCapacity\' changes capacity of airport', () => {
    // Arrange
    let airport1 = new AIRPORT('airport1');
    let newCapacity = 20;
    // Act/Assert
    test.assertEquals(airport1.changeAirportCapacity(newCapacity), 20);
});