import React from "react";
import vid1 from "./videos/vid5.mp4";
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
                <h2>Description:</h2>
                <br />
                <p>
                    <b>Asthma Attack:-</b>Asthma is an inflammation and
                    obstruction of the bronchial tubes – the passages that allow
                    air to enter and leave the lungs. During an asthma attack,
                    the muscles that surround the bronchial tubes constrict,
                    narrowing the air passages and making it extremely difficult
                    to breathe. Other common symptoms are wheezing and a
                    rattling sound in the chest.
                </p>
                <br />
                <p>Steps:-</p>
                <br />
                <p>
                    1.The first aid steps to take in case of an asthma attack
                    (also known as an asthma exacerbation) include the
                    following: Stay calm: Encourage the person to stay calm and
                    take slow, deep breaths.
                    <br />
                    2.Use their inhaler: If the person has an inhaler, help them
                    use it as directed. Shake the inhaler well before use and
                    instruct the person to inhale slowly and deeply.
                    <br />
                    3.Call for emergency help: If the person is having
                    difficulty breathing, is turning blue, or is unable to use
                    their inhaler effectively, call 911 or your local emergency
                    number immediately. <br />
                    4.Sit the person upright: Help the person sit upright and
                    lean forward slightly to help them breathe more easily.{" "}
                    <br />
                    6.Stay with the person: Stay with the person and monitor
                    their breathing. <br />
                    7.If the person stops breathing, begin CPR if you are
                    trained to do so. <br />
                    <br />
                    <p>Note:-</p>
                    Asthma exacerbations can be life-threatening, so it's
                    important to seek medical attention as soon as possible. If
                    the person has a written asthma action plan, follow it. If
                    they do not have a plan, seek medical advice.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
