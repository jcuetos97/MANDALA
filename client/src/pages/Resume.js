//$ npm install @emailjs/browser --save
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';



const Result = () =>{
    return(
        <p>Thank you for shopping with MANDALA!</p>
    )
}


function Resume(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2blscrj', 'template_xu3oa0g', e.target, 'dMMNN3gjfeyNnDnYi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };


      //Para esconder el resultado
      setTimeout(() => {
        showResult(false);
      }, 4000);

    return (
        <form action="" onSubmit={sendEmail}>
                <div className="signin">
            <div className="container-img">
                <img className="signin-img" src="https://d27m4mjhi8p0i4.cloudfront.net/images/V_744_v01_M.jpg" alt="Fernand Léger, Acrobats or Bathers (Acrobates or Les baigneuses), 1938" />
                <p>Fernand Léger, Acrobats or Bathers (Acrobates or Les baigneuses), 1938</p>
            </div>

            <div className="signin-content">
                <h1>Thank you for buying art</h1>
                <h2>Complete your information, please</h2>
                <h2>The artist will contact you soon</h2>
                <div className="field-wrap">
                        <label>Full Name</label>
                        <input type="text" name="fullName" required/>
                    </div>
                    
                    <div className="field-wrap">
                        <label>Email </label>
                        <input type="email" name="email" required/>
                    </div>
        
                    <div className="field-wrap">
                        <label>Phone Number</label>
                        <input type="text" required name="phone"/>
                    </div>

                    <div className="field-wrap">
                        <label>Message or address description</label>
                        <textarea name="message" required></textarea>
                    </div>

                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Submit</button>
                    </div>
                
                    <div className="field-wrap">{
                        result ? <Result/> : null
                    }</div>
            </div>
        </div> 
        </form>
    );
};

export default Resume;
















