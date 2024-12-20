import React from "react";
import logo from "./LPimages/logo.jpeg";
const logos = [logo];

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="left">
                    <h3>About Us</h3>
                    <br />
                    <p>
                        Our app is designed to be create awareness <br />{" "}
                        help in situations where an individual is <br /> in
                        danger or needs immediate assistance.
                    </p>
                    <br />
                    <h3>Contact Us</h3>
                    <br />
                    <p>+91 706026XXXX</p>
                    <p>vajra@gmail.com</p>
                </div>
                <div className="middle">
                    
                    <h3>Our Services</h3>
                    <br></br>
                    <p>Learning First-aid assistance </p>
                    <p>Consult Doctors</p>
                </div>
                <div className="right">
                    <img className="footerImg" src={logos[0]} alt="" />
                    <h3>Contact Us</h3>
                    <input
                        className="contactEmail"
                        type="text"
                        placeholder="Enter your email address"
                    />

                    <input className="submitEmail" type="Submit" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
