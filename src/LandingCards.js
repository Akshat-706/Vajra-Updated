import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ images, title, buttonName, university, disease }) => {
    return (
        <main className="cards">
            <div className="eventCard">
                <img src={images} alt="eventImage" style={{ width: "100%" }} />
                <p className="eventTitle">{disease}</p>
                <h1>{title} </h1>
                <p>{university}</p>

                <Link to={`/${buttonName}`}>
                    <button className="eventButton">{buttonName}</button>
                </Link>
            </div>
        </main>
    );
};

export default Cards;
