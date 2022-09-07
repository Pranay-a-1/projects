import { render, screen } from '@testing-library/react';
import NewPeep from '../../components/NewPeep';
import axios from "axios";

jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    post: jest.fn(),
}));

xdescribe('NewPeep.jsx tests', () => {

    const setup = async () => await render(<NewPeep />);

    xit('Test 1) should have a textarea with label peep', async () => {
        setup();
        const labelText = screen.getByLabelText(/peep/i);
        await expect(labelText).toBeInTheDocument();
    })

    it('Test 2) should have a textbox with name - peep', async () => {
        setup();
        const textBoxName = screen.getByRole('textbox', { name: /peep/i })
        await expect(textBoxName).toBeInTheDocument();
    })

    it('Test 3) should have a button with text - peep', async () => {
        setup();
        const buttonText = screen.getByRole('button', { name: /peep/i })
        await expect(buttonText).toBeInTheDocument();
    })


});
