import axios from "axios";
import { Form, Button, Container, Row, Col, Image, InputGroup, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import moment from 'moment';
const Home = () => {

    const [peepsArray, setPeepsArray] = useState([{
        createdAt: "",
        peepText: "",
        updatedAt: "",
        user: { _id: '', firstName: '', lastName: '', username: '' },
    }]);

    let getPeeps = async () => {

        const res = await axios.get("http://localhost:7000/", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        setPeepsArray(res.data);
    }

    useEffect(() => {
        getPeeps();
    }, []);


    return (
        <>
            {peepsArray.map(peep => {
                return (
                    <Row xs={1} md={1} lg={1} className="g-4">
                        <Card>

                            <Card.Body>

                                <Card.Text>
                                    <strong>{peep.user.firstName} {peep.user.lastName} </strong>
                                    <span> @{peep.user.username} - </span>
                                    <span> {moment(peep.createdAt).from(moment())} </span>
                                </Card.Text>
                                <Card.Text>{peep.peepText}</Card.Text>
                                {/* <Button variant="light">Reply</Button> */}
                            </Card.Body>
                        </Card>
                    </Row>
                )
            })}
        </>
    )
}

export default Home