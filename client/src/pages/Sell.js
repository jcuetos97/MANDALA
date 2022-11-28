import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_SALE } from "../utils/mutations";


// CSS Style
import "../assets/css/general.css";
import "../assets/css/sell.css";


const Sell = () => {
    const [formState, setFormState] = useState({
        title: '',
        author: '',
        description: '',
        price: 0,
        medium:'',
        image: '',
      });
    const [ addItemToSale, { error } ] = useMutation(ADD_ITEM_TO_SALE);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        

        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
       
        try {
          await addItemToSale({
            variables: { ...formState },
          });
    
        } catch (e) {
          console.error(e);
        }
      };
    
    return (
        <div className="sell"> 
            <div className="sell-form-containter">
                <form onSubmit={handleFormSubmit}>
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
                        <label>Author </label>
                        <input 
                            value={formState.author}
                            onChange={handleChange}
                            name="author" 
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
                            value={parseFloat(formState.price)}
                            onChange={handleChange}
                            name="price"
                            type="number" 
                            required />
                    </div>
                    
                    <label className="tags-container-title">Medium</label>
                    <div className="tags-container">
                        <div className="field-wrap-tag">
                            <label htmlFor="watercolor">Watercolor</label>
                            <input value="watercolor" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="oil">Oil</label>
                            <input value="oil" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="charcoal">Charcoal & Pencils</label>
                            <input value="charcoal" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="acrylic">Acrylic</label>
                            <input value="acrylic" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="mixedMedia">Mixed Media</label>
                            <input value="mixedMedia" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="other">Other</label>
                            <input value="other" onChange={handleChange} name="medium" type="radio"/>
                        </div>
                    </div>
                    
                    <div className="field-wrap">
                        <label>Image</label>
                        <input 
                            value={formState.image}
                            onChange={handleChange}
                            type="file" 
                            name="image" 
                            required />
                    </div>
                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Publish</button>
                    </div>
                </form>
                
                {error && (
                    <div>
                    <br />
                    {error.message}
                    </div>
                    )} 
            </div>
        </div>
    );
};

export default Sell;