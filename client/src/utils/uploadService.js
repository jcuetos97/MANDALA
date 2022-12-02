import axios from "axios";
import Auth from "../utils/auth";


const HOST = process.env.REACT_APP_API || "http://localhost:3000";

class UploadService {
    getItems() {
        return axios.get(`${HOST}/download`);
    };

    sendImages(title, description, price, medium, file) {        
      
        
        const author = Auth.getProfile().data.username;        
        const form = new FormData();
        form.append("author", author );
        form.append("title", title);
        form.append("description", description);
        form.append("price", price);
        form.append("medium", medium);
        form.append("file", file, "form-data");

        return axios.post(`${HOST}/upload`, form);
    };
};

export default new UploadService();
