


import axios from 'axios';

const guardian_API = "https://content.guardianapis.com/search?api-key=e2dbe3a6-10dd-4ece-892d-c90287c8b573&show-fields=all";

const getDataFromAPI = async (link_API = guardian_API) => {
    try {
        const res = await axios.get(link_API);
        return (res.data.response.results.length > 0) ? res.data : new Error(`Response received from API but data is invalid - check credentials!`);
    }
    catch (err) {
        return console.log('rejected: ', err.message)
    }
}
export default getDataFromAPI;