import { FloatingLabel, Form, Card, Button } from 'react-bootstrap';
import useNewPeepDashboard from '../hooks/useNewPeepDashboard';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const NewPeep = ({ loggedInUserData }) => {

    useNewPeepDashboard({ loggedInUserData });

    // let { peepText } = values;
    // let { taggedUsername } = taggedUsernameIs;

    const [values, setValues] = useState({
        peepText: "",
    });

    const [newPeepCreated, setNewPeepCreated] = useState(false);

    let { peepText } = values;

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let taggedUsername;
        if (peepText.includes('@')) {
            let s1 = peepText.substring(peepText.indexOf('@'));
            let s2 = s1.split(' ')[0];
            taggedUsername = s2;
        }
        try {
            const res = await axios.post("http://localhost:7000/new-peep", {
                accessToken: `Bearer ${localStorage.getItem('token')}`,
                ...values,
                taggedUsername,

            });
            setNewPeepCreated(true);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {newPeepCreated && <Navigate to='/' replace='true' />}
            <Card>
                <Card.Body>
                    <Card.Text>
                        <strong>{loggedInUserData.firstName} {loggedInUserData.lastName}</strong>
                        <span> @{loggedInUserData.username}</span>
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel controlId="floatingTextarea" label="Peep">
                            <Form.Control
                                as="textarea"
                                placeholder="Type your peep here"
                                style={{ height: '100px' }}
                                name="peepText"
                                autoComplete='off'
                                onChange={handleChange}
                                value={peepText}
                            />
                        </FloatingLabel>
                        <br />
                        <Button type="submit" variant="info">Peep</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewPeep