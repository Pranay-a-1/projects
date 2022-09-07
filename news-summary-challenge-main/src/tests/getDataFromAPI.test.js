import { render, screen } from '@testing-library/react';
import getDataFromAPI from '../components/utils/getDataFromApi';


describe('Guardian API axios tests', () => {
    const logSpy = jest.spyOn(console, 'log');

    it('should throw error if API key invalid', async () => {
        return await getDataFromAPI("https://content.guardianapis.com/search?api-key=INVALID-KEY&show-fields=all")
            .then(data => expect(logSpy.mock.calls[0][0]).toContain('rejected'));
    })

    it('should NOT throw any Error when connected to proper API key', async () => {
        return getDataFromAPI().then(data => {
            expect(data.response.results.length).toBeGreaterThanOrEqual(10);
        })
    })

});