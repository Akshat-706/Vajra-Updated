import React from "react";
import vid1 from "./videos/vid7.mp4";
import img1 from "./images/Asthma.jpeg";
import img2 from "./images/Choke.jpeg";
import img3 from "./images/Heart.jpeg";
import img4 from "./images/StopBleed.jpeg";

import { Link } from "react-router-dom";
import "./video.css";
const vid = [vid1];
const img = [img1, img2, img3, img4];

const Video1 = () => {
    return (
        <main>
            <div className="firstHalf">
                <div className="left">
                    <video width="1420" height="560" controls>
                        <source src={vid[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="right" style={{ padding: "0.5rem" }}>
                    <h3>&nbsp;&nbsp;Recommended Videos</h3>
                    <Link to="../video2">
                        <img className="recImg" src={img[0]} alt="recimg" />
                    </Link>
                    <Link to="../video3">
                        <img className="recImg" src={img[1]} alt="recimg" />
                    </Link>
                    <Link to="../video4">
                        <img className="recImg" src={img[2]} alt="recimg" />
                    </Link>
                </div>
            </div>
            <div className="secondHalf">
                <h2>Description</h2>
                <br />
                <p>
                    <b>Steps:-</b> <br />
                    1.Call for emergency help: Call 911 or your local emergency
                    number immediately. <br />
                    2.Keep the person awake and sitting upright: If the person
                    is unconscious, try to keep them awake and sitting upright.
                    <br />
                    3.Keep the airway clear: Make sure the person's airway is
                    clear and their head is tilted back slightly to prevent
                    choking.
                    <br />
                    4.Stay with the person: Stay with the person and monitor
                    their breathing. If the person stops breathing, begin CPR if
                    you are trained to do so.
                    <br />
                    5.Do not induce vomiting: Do not give the person anything to
                    drink or induce vomiting, as this can be dangerous.
                    <br />
                    <br />
                    <b>Home-Remedis for hangover:-</b>
                    <br />
                    1.Drink fluid.
                    <br />
                    2.Drink Coffee
                    <br />
                    3.Take a pain reliver
                    <br />
                    4.Taste Sour
                    <br />
                    <br />
                    <b>Note:-</b> It's important to remember that alcohol
                    overdose is a serious condition that requires medical
                    attention. The best way to reduce the effects of alcohol
                    overdose is to seek medical help as soon as possible.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
