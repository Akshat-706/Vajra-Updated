import React from "react";
import LandingCards from "./LandingCards";
import "./Home.css";
import img1 from "./LPimages/a.jpeg";
import img2 from "./LPimages/aboutus.jpeg";
import img3 from "./LPimages/b.jpeg";
import img4 from "./LPimages/c.jpeg";
import img5 from "./LPimages/consult.jpg";  
import img6 from "./LPimages/firstaid.jpg";
import img7 from "./LPimages/firstsection.png";
import img8 from "./LPimages/logo.jpeg";
import img9 from "./LPimages/secondsection.png";
import img10 from "./LPimages/sectionthird.png";
const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const university = [
    "Regular check-ups with a doctor can help detect and prevent potential health problems.",
    "First aid skills can help respond quickly and effectively in emergency situation.",
    "The SOS app can be used to help individuals in the emergency situations and save lifes.",
];
const buttonName = ["Consult", "First Aid", "About Us"];

function Home() {
    return (
        <main>
            <div className="landingPage">
                <div className="firstRow">
                    <h1 className="lpr1Heading">Be Prepared,</h1>
                    <br />
                    <h3 className="lpr1Heading2">
                        For anything with the First Aid app
                    </h3>
                    <br />
                    <p className="lpr1Parra">
                        Your personal emergency response
                    </p>
                    <p className="lpr1Parra">
                        assistant, always ready and at your fingertips.
                    </p>
                </div>
                <div className="secondRow">
                    <LandingCards
                        images={img[4]}
                        university={university[0]}
                        buttonName={buttonName[0]}
                    />
                    <LandingCards
                        images={img[5]}
                        university={university[1]}
                        buttonName={buttonName[1]}
                    />
                    <LandingCards
                        images={img[1]}
                        university={university[2]}
                        buttonName={buttonName[2]}
                    />
                </div>
                <div className="thirdRow">
                    <img className="thirdRowImg" src={img[8]} alt="" />
                </div>
                <div className="fourthRow">
                    <img className="img" src={img[0]} alt="" />

                    <img className="img" src={img[3]} alt="" />

                    <img className="img" src={img[2]} alt="" />
                </div>

                <div className="fifthRow">
                    <h1 className="lpr5Heading">About Us</h1>
                    <br />
                    <p>
                        Our app is designed to be create awareness and help in
                        situations where an individual <br /> is in danger or
                        needs immediate assistance.The mission could be to
                        provide <br />
                        accurate,up-to-date information on first aid procedures
                        and make it accessible to <br /> people through the app,
                        empowering individuals to take action and potentially
                        save a life.
                    </p>
                    <br />
                    <p>
                        <b> Preparedness:</b> By learning first aid, you can be
                        prepared for unexpected emergencies <br /> and be able
                        to respond quickly and effectively to help others.
                    </p>
                    <br />
                    <p>
                        <b> Saving lives:</b> Knowing first aid can mean the
                        difference between life and death in an <br /> emergency
                        situation, and can help you take the necessary steps to
                        keep someone <br />
                        stable until professional help arrives.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Home;
