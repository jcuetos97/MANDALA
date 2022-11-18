import React from "react";


const Card = ({image,title,description,id,price}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
                <img className="profile-photo card-img-top" src={image} alt={title}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">{price}</p>
                            <button onClick={()=>console.log(`Add to cart ID: ${id}`)} className="btn btn-primary">Add to Cart</button>
                        </div>
                </div>
    )
};

export default Card;