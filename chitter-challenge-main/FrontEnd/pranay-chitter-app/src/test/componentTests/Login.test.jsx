import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../components/Login';

jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    post: jest.fn(),
}));



describe('Login.jsx tests', () => {

    const setup = async () => await render(<Login />, { wrapper: BrowserRouter });

    it('Test 20) should render Login component', async () => {
        setup();
        const loginText = screen.getByText(/Sign in/i);
        await act(() => Promise.resolve());
        await expect(loginText).toBeInTheDocument();
    })

    it('Test 21) should have a textarea with label email', async () => {
        setup();
        const emailField = screen.getByRole('textbox', { name: /email address/i });
        await act(() => Promise.resolve());
        await expect(emailField).toBeInTheDocument();
    })

});
