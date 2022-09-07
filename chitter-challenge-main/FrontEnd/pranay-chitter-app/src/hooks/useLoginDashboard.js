import { useState } from 'react';
import axios from 'axios';


const useLoginDashboard = ({ setLogInStatus, setLoggedInUserData }) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const axiosLoginPostReq = async () => {
        try {
            const res = await axios.post("http://localhost:7000/user/login", {
                ...values,
            });
            setLogInStatus(res.data.token ? true : false);
            setLoggedInUserData(res.data);
            localStorage.setItem("token", res.data.token);
        } catch (error) {
            console.log(error);
            if (error.response?.data) {
                const { message } = error.response.data;
                alert(message);
            }

        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axiosLoginPostReq();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }


    return { values, handleChange, handleSubmit }

}

export default useLoginDashboard;