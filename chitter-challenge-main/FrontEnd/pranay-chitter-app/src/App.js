import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useState } from 'react';

import NewPeep from "./components/NewPeep.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Home from './components/Home.jsx';
import Header from "./components/Header.jsx";

function App() {

  const [loginStatus, setLogInStatus] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState(undefined);

  return (
    <>
      <Container fluid="md">
        <BrowserRouter>
          <Header loggedInUserData={loggedInUserData} setLogInStatus={setLogInStatus} />
          <Routes>
            {/* {loginStatus && <Route path="/" element={<Home />} />}
            {!loginStatus && <Route path="/" element={<Home />} />} */}
            <Route path="/" element={<Home />} />
            <Route path="/new-peep" element={<NewPeep loggedInUserData={loggedInUserData} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login setLogInStatus={setLogInStatus} loginStatus={loginStatus} setLoggedInUserData={setLoggedInUserData} />} />
            {loginStatus && <Route path="/new-peep" element={<NewPeep loggedInUserData={loggedInUserData} />} />}
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
