import axios from "axios";

export default axios.create({
    baseURL: "http://luxus.info.vn/admin",
    headers: {
        "Content-type": "application/json"
    }
});