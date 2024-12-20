import React from "react";
import vid1 from "./videos/vid2.mp4";
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
                    <b> Heart Attack:</b> A heart attack occurs when the flow of
                    blood to the heart is severely reduced or blocked. The
                    blockage is usually due to a buildup of fat, cholesterol and
                    other substances in the heart (coronary) arteries.The fatty,
                    cholesterol-containing deposits are called plaques. The
                    process of plaque buildup is called atherosclerosis.
                    <br />
                    <br />
                    <b>Steps:-</b>
                    <br />
                    1.Call emergency services: Dial 911 or the local emergency
                    number immediately.
                    <br />
                    2.Do not attempt to drive to the hospital yourself. <br />
                    3.Chew and swallow an aspirin: If the person has no known
                    allergies to aspirin and is able to swallow, have them chew
                    and swallow a single aspirin to help prevent further damage
                    to the heart.
                    <br />
                    4. Administer CPR: If the person is unconscious and not
                    breathing, start CPR immediately and continue until
                    emergency medical services arrive.
                    <br />
                    5.Provide comfort: While waiting for emergency services, try
                    to keep the person calm and comfortable by talking to them
                    and reassuring them. <br />
                    6.Get to a hospital: Once emergency medical services arrive,
                    the person will be taken to a hospital for treatment. <br />
                    <br />
                    <b>Note:</b> The symptoms of a heart attack can vary from
                    person to person and it's important to seek medical
                    attention as soon as possible if you suspect someone is
                    having a heart attack. Time is critical in treating a heart
                    attack, and early recognition and treatment can greatly
                    improve the outcome.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
