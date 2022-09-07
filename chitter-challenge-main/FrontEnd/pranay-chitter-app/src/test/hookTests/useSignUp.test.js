import { render, screen, act, renderHook, waitFor } from '@testing-library/react';
import useSignUpDashboard from "../../hooks/useSignUpDashboard";
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../../components/SignUp';
import axios from "axios";

jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    post: jest.fn(),
}));


describe('useSignUpDashboard tests', () => {


    const setup = async () => await render(<SignUp />, { wrapper: BrowserRouter });
    it('Test 11) should set initial field to empty strings', async () => {
        setup();
        const emailValue = screen.getByRole('textbox', { name: /email address/i });
        await act(() => Promise.resolve());
        expect(emailValue.getAttribute("value")).toMatch("");
    })

    it("Test 12) should update email data when handleChange() called", async () => {
        const wrapper = ({ children }) => <BrowserRouter> <SignUp />{children}</BrowserRouter>;
        const { result } = renderHook(() => useSignUpDashboard(), { wrapper });
        const value = "pranay.email@gmail.com";
        const event = { target: { name: "email", value } };

        await act(async () => {
            result.current.handleChange(event);
        });

        expect(result.current.values.email).toEqual(value);

    });

    it("Test 13) should handle error when handleSubmit called but there is an error", async () => {
        jest.spyOn(console, 'log').mockImplementation(() => { });



        const customError = { message: "There is an error occurred" };
        axios.post.mockImplementationOnce(() =>
            Promise.reject(new Error(customError.message))
        );
        const wrapper = ({ children }) => <BrowserRouter> <SignUp />{children}</BrowserRouter>;
        const { result } = renderHook(() => useSignUpDashboard(), { wrapper });
        await act(async () => {
            try {
                const event = { preventDefault: jest.fn() };
                await result.current.handleSubmit(event);
            } catch (error) {
                expect(error.message).toEqual(customError.message);
            }
        });

    });

})