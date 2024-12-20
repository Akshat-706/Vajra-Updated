import React from "react";
import vid1 from "./videos/vid1.mp4";
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
            <hr style={{ height: "5px", backgroundColor: "black" }} />
            <div className="secondHalf">
                <h2>Description</h2>
                <br />
                <p>
                    <b> Rashes on Skin:</b>A rash is any area of irritated or
                    swollen skin on your body. Rashes are often itchy and
                    painful and can appear differently on different skin tones.
                    While they are often described as red, on darker skin tones
                    they may be purple, gray, or white.A rash is any area of
                    irritated or swollen skin on your body. Rashes are often
                    itchy and painful and can appear differently on different
                    skin tones. While they are often described as red, on darker
                    skin tones they may be purple, gray, or white. <br />
                    <br />
                    <b>Steps:-</b>
                    <br />
                    1.Keep the affected area clean: Gently clean the affected
                    area with mild soap and water. <br />
                    2.Avoid using hot water or scrubbing the skin, as this can
                    make the rashes worse.
                    <br />
                    3.Avoid irritants: Identify any irritants that may have
                    caused the rashes, such as certain soaps, detergents, or
                    fabrics, and avoid them. <br />
                    4.Use over-the-counter creams: Over-the-counter creams, such
                    as hydrocortisone cream, can help relieve itching and reduce
                    redness.
                    <br />
                    5.Apply a cool compress: A cool compress, such as a cloth
                    soaked in cold water, can also help relieve itching and
                    reduce redness.
                    <br />
                    6.Seek medical attention: If the rashes are severe or
                    accompanied by symptoms such as fever, difficulty breathing,
                    or swelling, it's important to seek medical attention
                    immediately. Follow doctor's instructions: If a medical
                    condition is causing the rashes, a doctor may prescribe
                    medications or recommend other treatments. It's important to
                    follow the doctor's instructions to ensure proper healing.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
