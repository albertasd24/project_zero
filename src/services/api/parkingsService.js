import axios from "axios"

export const createParkingMasiveService = async (file) => {
    try {
        console.log(file);
        
        await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/parkings/masive`, file, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
    } catch (error) {
        console.log(error);

    }
}