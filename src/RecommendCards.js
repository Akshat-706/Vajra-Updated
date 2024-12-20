import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ images, title, buttonName, degree }) => {
    return (
        <main className="cards">
            <div className="eventCard">
                <img src={images} alt="eventImage" style={{ width: "100%" }} />
                <p className="eventTitle">{degree}</p>
                <h1>{title} </h1>
                <form action="https://meet.google.com/mhm-qnjs-vbt">
                    <button className="recommendButton">{buttonName}</button>
                </form>
            </div>
        </main>
    );
};

export default Cards;
