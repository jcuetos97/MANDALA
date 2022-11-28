import axios from 'axios';
import Auth from '../utils/auth';

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 3001;

class UploadService {
    getItems() {
        return axios.get(`${HOST}:${PORT}/download`);
    };

    sendImages(name, description, price, medium, file) {        
        const author = Auth.getProfile().data.username;        
        const form = new FormData();
        form.append('author', author );
        form.append('title', name);
        form.append('description', description);
        form.append('price', price);
        form.append('medium', medium);
        form.append('file', file, 'form-data');

        console.log('antes de enviar');
        return axios.post(`${HOST}:${PORT}/upload`, form);
    };
};

export default new UploadService();