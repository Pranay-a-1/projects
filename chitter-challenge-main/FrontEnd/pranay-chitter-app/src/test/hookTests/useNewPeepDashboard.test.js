import { renderHook, act } from "@testing-library/react";
import axios from "axios";
import useNewPeepDashboard from "../../hooks/useNewPeepDashboard.js";

jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    post: jest.fn(),
}));

xdescribe('useNewPeepDashboard tests', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        console.log.mockClear();
    });

    afterAll(() => {
        console.log.mockRestore();
    });


    it('Test 5) should set initial peepText to empty strings', async () => {
        const { result } = renderHook(() => useNewPeepDashboard());
        const initialPeepTextValue = { peepText: "" };
        await expect(result.current.values).toEqual(initialPeepTextValue);
    })

    it("Test 6) should update peepText data when handleChange() called", async () => {
        const { result } = renderHook(() => useNewPeepDashboard());
        const value = "This is my typed peep";
        const event = { target: { name: "peepText", value } };
        await act(async () => {
            result.current.handleChange(event);
        });
        await expect(result.current.values.peepText).toEqual(value);
    });

    xit("Test 7) should add peepText data when handleSubmit() called", async () => {
        const { result } = renderHook(() => useNewPeepDashboard());
        const value1 = "This is my typed peep for value1";
        const event1 = { target: { name: "peepText", value: value1 } };

        await act(async () => {
            result.current.handleChange(event1);
        });

        await act(async () => {
            const thisIsASubmitEvent = { preventDefault: jest.fn() };
            result.current.handleSubmit(thisIsASubmitEvent);
        });


        await expect(result.current.values).toEqual(
            {
                peepText: "This is my typed peep for value1",
            });
    });

    xit('Test 4) should make a post request with newPeep data attached in the req body', async () => {
        const { result } = renderHook(() => useNewPeepDashboard());
        const value2 = "hey this my new peep for axiosNewPeepPostReq test";
        const event2 = { target: { name: "peepText", value: value2 } };

        await act(async () => {
            result.current.handleChange(event2);
        });

        await act(async () => {
            const thisIsASubmitEvent = { preventDefault: jest.fn() };
            result.current.handleSubmit(thisIsASubmitEvent);
        });

        await expect(axios.post).toHaveBeenCalledWith(
            "http://localhost:7000/new-peep",
            expect.objectContaining({
                accessToken: expect.stringContaining("Bearer"),
                peepText: "hey this my new peep for axiosNewPeepPostReq test",
            })
        );
    })

    xit("Test 8) should handle error when handleSubmit called but there is an error", async () => {
        const customError = { message: "There is an error occurred" };
        axios.post.mockImplementationOnce(() =>
            Promise.reject(new Error(customError.message))
        );
        const { result } = renderHook(() => useNewPeepDashboard());

        try {
            const event = { preventDefault: jest.fn() };
            await result.current.handleSubmit(event);
        } catch (error) {
            expect(error.message).toEqual(customError.message);
        }
    });

})