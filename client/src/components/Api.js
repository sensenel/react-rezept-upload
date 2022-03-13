import axios from "axios";

const api = axios.create({
 baseURL: process.env.REACT_APP_BASE_URL || "/images",
});

export default api