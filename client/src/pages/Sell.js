import React, { useState } from "react";
import uploadService from '../utils/uploadService';
import { useNavigate } from 'react-router-dom';


// CSS Style
import "../assets/css/general.css";
import "../assets/css/sell.css";


const Sell = () => {

    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        price: '',
        medium: '',
    });
    const [file, setFile] = useState();
    const [pathImages, setPathImages] = useState('');

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        

        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const sendImage = (e) => {
        e.preventDefault();
        console.log(file, "filename");
        uploadService.sendImages(
            formState.title, formState.description, formState.price, formState.medium, file
        ).then((result) => {
            navigate('/explore');
        });

    };

    const onFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type.includes('image')) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function load() {
                    setPathImages(reader.result)
                }
                setFile(file);
            } else {
                console.log('There was an error');
            }
        }
    };
    
    return (
        <div className="sell"> 
            <div className="sell-form-containter">
                <form>
                    <h2>Let the world discover your art!</h2>
                    <div className="field-wrap">
                        <label>Title </label>
                        <input 
                            value={formState.title}
                            onChange={handleChange}
                            name="title" 
                            type="text"
                            required />
                    </div>
                    <div className="field-wrap">
                        <label>Description (140 characters max)</label>
                        <textarea 
                            value={formState.description}
                            onChange={handleChange}
                            maxLength="140" 
                            name="description" 
                            rows="3" 
                            cols="50" 
                            required />
                    </div>
                    <div className="field-wrap">
                        <label>Price</label>
                        <input 
                            value={formState.price}
                            onChange={handleChange}
                            name="price"
                            type="number" 
                            required />
                    </div>
                    
                    <label className="tags-container-title">Medium</label>
                    <div className="tags-container">
                        <div className="field-wrap-tag">
                            <label htmlFor="watercolor">Watercolor</label>
                            <input value="Watercolor" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="oil">Oil</label>
                            <input value="Oil" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="charcoal">Charcoal & Pencils</label>
                            <input value="Charcoal and Pencils" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="acrylic">Acrylic</label>
                            <input value="Acrylic" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="mixedMedia">Mixed Media</label>
                            <input value="Mixed Media" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="other">Other</label>
                            <input value="Other" onChange={handleChange} name="medium" type="radio" required/>
                        </div>
                    </div>
                    
                    <div className="field-wrap">
                        <label>Image</label>
                        <input 
                            type="file" 
                            name="image" 
                            onChange={onFileChange} 
                            required />
                    </div>
                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated" onClick={sendImage}>Publish</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sell;