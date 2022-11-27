import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_SALE } from "../utils/mutations";


// CSS Style
import "../assets/css/general.css";
import "../assets/css/sell.css";


const Sell = () => {
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        price: '',
        watercolor: '',
        oil: '',
        charcoal: '',
        acrylic: '',
        mixedMedia: '',
        other:'',
        tags: '',
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
                        <label>Name </label>
                        <input 
                            value={formState.name}
                            onChange={handleChange}
                            type="text"
                            required 
                            autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Description (140 characters max)</label>
                        <textarea 
                            value={formState.description}
                            onChange={handleChange}
                            maxlength="140" 
                            name="description" 
                            rows="3" 
                            cols="50" 
                            required />
                    </div>
                    <div class="field-wrap">
                        <label>Price</label>
                        <input 
                            value={formState.price}
                            onChange={handleChange}
                            name="name"
                            type="text" 
                            required 
                            autocomplete="off"/>
                    </div>
                    
                    <label className="tags-container-title">Tags</label>
                    <div class="tags-container">
                        <div className="field-wrap-tag">
                            <label htmlFor="watercolor">Watercolor</label>
                            <input value={formState.tags} onChange={handleChange} name="watercolor" type="checkbox"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="oil">Oil</label>
                            <input value={formState.tags} onChange={handleChange} name="oil" type="checkbox"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="charcoal">Charcoal & Pencils</label>
                            <input value={formState.tags} onChange={handleChange} name="charcoal" type="checkbox"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="acrylic">Acrylic</label>
                            <input value={formState.tags} onChange={handleChange} name="acrylic" type="checkbox"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="mixedMedia">Mixed Media</label>
                            <input value={formState.tags} onChange={handleChange} name="mixedMedia" type="checkbox"/>
                        </div>
                        <div className="field-wrap-tag">
                            <label htmlFor="other">Other</label>
                            <input value={formState.tags} onChange={handleChange} name="other" type="checkbox"/>
                        </div>
                    </div>
                    
                    <div class="field-wrap">
                        <label>Image</label>
                        <input 
                            value={formState.image}
                            onChange={handleChange}
                            type="file" 
                            name="image" 
                            required 
                            autocomplete="off"/>
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