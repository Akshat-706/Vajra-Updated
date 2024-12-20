import React from "react";
import vid1 from "./videos/vid8.mp4";
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
                    <b>Snake bite:-</b>A snakebite is an injury caused by the
                    bite of a snake, especially a venomous snake.A common sign
                    of a bite from a venomous snake is the presence of two
                    puncture wounds from the animal's fangs.
                    <br />
                    <br />
                    <b>Steps:-</b>
                    <br />
                    1.Call emergency services: Dial 911 or the local emergency
                    number immediately.
                    <br />
                    2.Do not attempt to drive to the hospital yourself.
                    <br />
                    3.Keep the affected limb still: Keep the affected limb still
                    and at or below the level of the heart to help slow the
                    spread of venom. <br />
                    4.Remove tight clothing and jewelry: Remove any tight
                    clothing or jewelry near the bite, as they can restrict
                    blood flow.
                    <br />
                    5.Clean the bite: Clean the bite gently with soap and water.
                    <br />
                    6. Watch for symptoms: Symptoms of a snake bite can include
                    pain, swelling, and difficulty breathing. <br />
                    7.Do not attempt to suck out the venom: Do not attempt to
                    suck out the venom or make any cuts on the bite, as this can
                    cause further damage. <br />
                    8.Avoid eating and drinking: Avoid eating or drinking
                    anything, as you may need to undergo surgery or receive
                    anti-venom. <br />
                    <br />
                    <br />
                    <b>Note:</b>
                    The severity of a snake bite can vary depending on the type
                    of snake and the amount of venom injected. It's important to
                    seek medical attention as soon as possible in case of a
                    snake bite, as time is critical in treating the bite and
                    preventing serious complications.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
