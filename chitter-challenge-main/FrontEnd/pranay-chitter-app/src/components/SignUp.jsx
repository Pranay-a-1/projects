import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useSignUpDashboard from '../hooks/useSignUpDashboard';

const SignUp = () => {

    const { values, signUpSuccess, handleChange, handleSubmit, onSuccessRegister } = useSignUpDashboard();

    const { firstName, lastName, username, email, password, confirmPassword } = values;

    return (
        <>
            {signUpSuccess && <Button variant="primary" type="button" onClick={onSuccessRegister}>
                Sign In
            </Button>}
            <Container fluid="md" >
                <Card >
                    <Card.Header as="h5">
                        <FaUser /> Register
                    </Card.Header>
                    <Card.Title>Please create an account</Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" name="firstName" autoComplete='off' onChange={handleChange} value={firstName} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" name="lastName" autoComplete='off' onChange={handleChange} value={lastName} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" autoComplete='off' onChange={handleChange} value={email} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Username" name="username" autoComplete='off' onChange={handleChange} value={username} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" autoComplete='off' onChange={handleChange} value={password} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="confirmPassword" autoComplete='off' value={confirmPassword} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Row>
                            <Col>
                                <Card.Text>
                                    Have an account already?
                                    <Button variant="light" type="submit" ><NavLink to='/login'>Sign In</NavLink></Button>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
}

export default SignUp