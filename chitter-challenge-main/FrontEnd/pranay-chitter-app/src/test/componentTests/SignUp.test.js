import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../../components/SignUp';

jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    post: jest.fn(),
}));


describe('SignUp.jsx tests', () => {

    const setup = async () => await render(<SignUp />, { wrapper: BrowserRouter });

    it('Test 9) should render SignUp component', async () => {
        setup();
        const signupText = screen.getByText(/register/i);
        await act(() => Promise.resolve());
        await expect(signupText).toBeInTheDocument();
    })

    it('Test 10) should have a textarea with label email', async () => {
        setup();
        const emailField = screen.getByRole('textbox', { name: /email address/i });
        await act(() => Promise.resolve());
        await expect(emailField).toBeInTheDocument();
    })

});
