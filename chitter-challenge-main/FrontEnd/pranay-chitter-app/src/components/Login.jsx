import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa'
import { Navigate } from 'react-router-dom';
import useLoginDashboard from '../hooks/useLoginDashboard';


const Login = ({ setLogInStatus, setLoggedInUserData, loginStatus }) => {

    const { values, handleChange, handleSubmit } = useLoginDashboard({ setLogInStatus, setLoggedInUserData });

    const { email, password } = values;

    return (
        <>
            {loginStatus && <Navigate to='/' replace='true' />}
            <Container fluid="md" >
                <Card >
                    <Card.Header as="h5">
                        <FaSignInAlt /> Login
                    </Card.Header>
                    <Card.Title>Please login to your account</Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} autoComplete='off' name="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange} autoComplete='off' name="password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Sign In
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card >
            </Container>
        </>
    )

}

export default Login;