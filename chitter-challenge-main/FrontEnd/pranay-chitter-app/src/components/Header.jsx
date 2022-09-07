import { FaSignInAlt, FaSignOutAlt, FaUser, } from 'react-icons/fa'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { IoCreateSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Header = ({ loggedInUserData, setLogInStatus }) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLogInStatus(false);
        window.location.reload(true);
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand><NavLink to="/">Chitter </NavLink></Navbar.Brand>
                    <Nav>
                        {!loggedInUserData && <> <NavLink to="/login">
                            <FaSignInAlt /> Login
                        </NavLink> </>}

                        {!loggedInUserData && <> <NavLink to="/signup">
                            <FaUser /> Signup
                        </NavLink> </>}

                        {loggedInUserData && <>
                            <NavLink to="/new-peep">
                                <IoCreateSharp />New Peep
                            </NavLink> </>}

                        {loggedInUserData && <>
                            <Button variant='light'>
                                <FaUser /> Welcome {loggedInUserData.username}
                            </Button> </>}

                        {loggedInUserData && <>
                            <Button variant='light' onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </Button> </>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;