const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) { throw new Error; }
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log('\x1b[32m%s\x1b[0m', `\t${str}`);
        } catch (err) {
            console.log('\x1b[31m%s\x1b[0m', `\t${str}`);
            console.log(err.stack);
        }
    }
};

module.exports = test;