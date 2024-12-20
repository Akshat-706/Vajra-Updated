import React from "react";
import vid1 from "./videos/vid6.mp4";
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
                    <b>Uncontrolled Bleeding:-</b>A hemorrhage refers to a rapid
                    escape of blood; when someone is hemorrhaging, they are
                    typically in a critical state and consistently losing an
                    excessive amount of blood.
                </p>
                <br />
                <p>
                    <b>Steps:-</b>
                </p>
                <br />
                <p>
                    1.Call emergency services: Dial 911 or the local emergency
                    number immediately.
                    <br />
                    2.Protect yourself: If the person who is bleeding is
                    conscious and able to follow instructions, have them lie
                    down and elevate the affected limb if possible.
                    <br />
                    3.If they are unconscious or unable to follow instructions,
                    protect yourself from coming into contact with the blood.
                    <br />
                    4.Apply direct pressure: Apply direct pressure to the
                    bleeding wound with a clean cloth or bandage.
                    <br />
                    5. If the cloth becomes saturated, do not remove it; add
                    more cloth on top of it and continue to apply pressure.
                    <br />
                    6.Elevate the affected limb: If the bleeding is from an arm
                    or leg, elevate it above the level of the heart to help slow
                    the bleeding.
                    <br />
                    7. Remove any constricting clothing: Remove any constricting
                    clothing, such as a tight-fitting shirt or pants, that may
                    be applying pressure to the bleeding wound. <br />
                    8.Use a tourniquet only as a last resort: If the bleeding is
                    severe and cannot be controlled by direct pressure, you may
                    need to use a tourniquet. A tourniquet should only be used
                    as a last resort and only by someone who is trained to use
                    one.
                    <br />
                    9. Monitor the person's vital signs: If the person is
                    conscious, monitor their vital signs, such as their pulse
                    and breathing, and reassure them until emergency services
                    arrive. <br />
                    <br />
                    <b>Note: </b> Time is critical in the case of uncontrolled
                    bleeding, as rapid blood loss can lead to shock and death.
                    It's important to seek medical attention as soon as
                    possible.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
