import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useSignUpDashboard = () => {

    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    let navigate = useNavigate();

    const onSuccessRegister = event => {
        event.preventDefault();
        alert("SignUp successful, please login");
        navigate("/login", { replace: true });

    }

    const axiosSignUpPostReq = async () => {
        try {
            const res = await axios.post("http://localhost:7000/user/register", {
                ...values,
            });
            setSignUpSuccess(true);
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
        axiosSignUpPostReq();
    };


    return { values, signUpSuccess, handleChange, handleSubmit, onSuccessRegister }

}

export default useSignUpDashboard;