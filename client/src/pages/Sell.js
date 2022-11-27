import React, { useState } from "react";
import { Link } from "react-router-dom";

import uploadService from '../utils/uploadService';

import Auth from "../utils/auth";

// CSS Style
import "../assets/css/general.css";
import "../assets/css/sell.css";



const Sell = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState('');
    const [file, setFile] = useState();
    const [pathImages, setPathImages] = useState('');

    const sendImage = (e) => {
        e.preventDefault();
        console.log(file);
        uploadService.sendImages(
            name, description, price, tags, file
        ).then((result) => {
            console.log('Result: ', result);
        });
    };

    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type.includes('image')) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function load() {
                    setPathImages(reader.result)
                }
                setFile(file);
            }else {
                console.log('There was an error');
            }
        }
    }

    return (
        <div className="sell"> 
            <div className="sell-form-containter">
            {Auth.loggedIn() ? (
                <form>
                    <h2>Let the world discover your art!</h2>
                    <div className="field-wrap">
                        <label>Name </label>
                        <input type="text" onChange={(e) => setName(e.target.value)} required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Description (140 characters max)</label>
                        <textarea maxlength="140" name="description" rows="3" cols="50" onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div class="field-wrap">
                        <label>Price</label>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Tags</label>                        
                        <input type="tags" onChange={(e) => setTags(e.target.value)} required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Image</label>
                        <input type="file" name="fileImg" onChange={onFileChange} required autocomplete="off"/>
                    </div>
                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated" onClick={sendImage}>Publish</button>
                    </div>
                </form>
                ) : (
                    <>
                    <h3>Sorry! It seems that you are not logged in!</h3>
                    <p>Please <Link to="/signForm"><strong>sign in</strong></Link> to start discovering...</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sell;