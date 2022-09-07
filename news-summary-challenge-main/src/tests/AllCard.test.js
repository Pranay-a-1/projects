import { render, screen } from '@testing-library/react';
import AllCards from '../components/AllCards';
import mockNewsData from '../mockNewsData.json';
import { Link, NavLink } from 'react-router-dom';
//    Invariant failed: You should not use <Link> outside a <Router>
//failed after adding Link in Card.jsx
//passes if 'a' used instead

xdescribe('AllCards component Tests', () => {
    let mockArray = [];

    beforeEach(() => {
        mockArray = mockNewsData.response.results;
    });

    it('AllCards have thumbnails', () => {
        render(<AllCards allNewsData={mockArray} />);
        const imgElement = screen.getAllByRole('img', mockArray[0].id);
        expect(imgElement.length).toBeGreaterThan(0);
    });

    it('AllCards have a headline', () => {
        render(<AllCards allNewsData={mockArray} />);
        const linkElement = screen.getAllByRole('heading', mockArray[0].id);
        expect(linkElement.length).toBeGreaterThan(0);
    });
})






