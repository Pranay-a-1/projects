import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Summary from '../components/Summary';
import AllCards from '../components/AllCards';
import mockNewsData from '../mockNewsData.json';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import '@testing-library/dom';

describe('Summary Page tests with mockData', () => {
    let mockArray = [];

    beforeEach(() => {
        mockArray = mockNewsData.response.results;
    });

    it('should test Summary has bodyText', async () => {
        const history = createMemoryHistory();
        history.push(`/summary/${mockArray[0].webTitle}`);
        render(
            <Router history={history}>
                <Switch>
                    <Route exact path='/'>
                        <AllCards allNewsData={mockArray} />
                    </Route>
                    <Route path='/summary/:id'>
                        <Summary allNewsData={mockArray} />
                    </Route>
                </Switch>
            </Router >
        )
        await fireEvent(
            screen.getByRole('heading', { name: mockArray[0].webTitle }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        await expect(screen.getByText(mockArray[0].fields.bodyText)).toBeInTheDocument()
    })

    it('should test Summary has url linked to guardian webpage', async () => {
        const history = createMemoryHistory();
        history.push(`/summary/${mockArray[0].webTitle}`);
        render(
            <Router history={history}>
                <Switch>
                    <Route exact path='/'>
                        <AllCards allNewsData={mockArray} />
                    </Route>
                    <Route path='/summary/:id'>
                        <Summary allNewsData={mockArray} />
                    </Route>
                </Switch>
            </Router>
        )

        await fireEvent(
            screen.getByRole('heading', { name: mockArray[0].webTitle }),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )

        await expect(screen.getByRole('heading', { name: /Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings/i })).toBeInTheDocument();
    })
});

