
const BASE_URL = "https://one00x-react-backend.onrender.com";

export const userLogin = async (email, password) => {
    try {

        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok)
            throw new Error('Login failed');

        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
        return error;
    }
};