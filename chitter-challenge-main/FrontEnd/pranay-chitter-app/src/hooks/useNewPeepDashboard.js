import { useState, useEffect } from 'react';
import axios from 'axios';

const useNewPeepDashboard = ({ loggedInUserData }) => {

    const [values, setValues] = useState({
        peepText: "",
    })
    let { peepText } = values;

    const [newPeepCreated, setNewPeepCreated] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const axiosNewPeepPostReq = async () => {
        try {
            const res = await axios.post("http://localhost:7000/new-peep", {
                accessToken: `Bearer ${localStorage.getItem('token')}`,
                ...values,
            });
            setNewPeepCreated(true);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axiosNewPeepPostReq();
    }


    return { values, handleChange, handleSubmit, newPeepCreated }
}

export default useNewPeepDashboard;