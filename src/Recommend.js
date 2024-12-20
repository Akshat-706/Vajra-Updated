import "./recommend.css";
import { useRef } from "react";
import RecommendCards from "./RecommendCards";

import C1 from "./images/d1.webp";
import C2 from "./images/d2.jpg";
import C3 from "./images/d3.avif";

const cardImg = [C1, C2, C3];
const degree = [
    "Heart Specialist",
    "Skin Care Specialist",
    "Infection Specialist",
    "Neuro Specialist",
    "Bone Specialist",
    "Physician",
    "Psychiatrist",
    "Dentist",
];
const title = [
    "Dr. Aaditya",
    "Dr. Dheer",
    "Dr. Akshat",
    "Dr. Arin",
    "Dr. Akshat",
    "Dr. Arin",
    "Dr. Aaditya",
    "Dr. Dheer",
];
const buttonName = ["Consult Now"];

export default function Recommend() {
    return (
        <div className="RecommendPage">
            <div className="topPage">
                <div className="form">
                    <form>
                        <div className="row1">
                            <div className="subForm">
                                <p>First Name</p>
                                <input
                                    className="firstName formInput"
                                    type="text"
                                />
                            </div>
                            <div className="subForm">
                                <p>Last Name</p>
                                <input
                                    className="lastName formInput"
                                    type="text"
                                />
                            </div>
                            <div className="subForm">
                                <p> Date of Appointment</p>
                                <input className="date formInput" type="date" />
                            </div>
                        </div>
                        <div className="row2">
                            <div className="subForm">
                                <p>City</p>
                                <input
                                    className="cityName formInput"
                                    type="text"
                                />
                            </div>
                            <div className="subForm">
                                <p>State</p>
                                <select
                                    className="choose formInput"
                                    name="state"
                                    id=""
                                >
                                    <option value="">Choose...</option>
                                </select>
                            </div>
                            <div className="subForm">
                                <p>Problem</p>
                                <input
                                    className="problem formInput"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="lastRow">
                            <input type="checkbox" />
                            <span>&nbsp;Agree to Terms and Conditions</span>
                            <br />
                            <button className="formBtn" type="submit">
                                Book Apointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bottomPage">
                <h2 className="bottomPageHeading">Our Doctors</h2>
                <div className="bottomCardRow">
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[0]}
                            images={cardImg[0]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[1]}
                            images={cardImg[1]}
                            title={title[1]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[2]}
                            images={cardImg[2]}
                            title={title[2]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[0]}
                            images={cardImg[1]}
                            title={title[3]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                </div>
                <div className="bottomCardRow">
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[4]}
                            images={cardImg[2]}
                            title={title[4]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[5]}
                            images={cardImg[1]}
                            title={title[5]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[6]}
                            images={cardImg[0]}
                            title={title[6]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="recommendCard">
                        <RecommendCards
                            degree={degree[7]}
                            images={cardImg[2]}
                            title={title[7]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
