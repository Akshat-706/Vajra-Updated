import React from "react";
import vid1 from "./videos/vid4.mp4";
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
                    <b>Fish Stuck in neck:-</b> <br />
                    <br />
                    <b>Steps:-</b>
                    <br />
                    1.If a fish bone is stuck in your neck, it's important to
                    seek medical attention immediately.
                    <br />
                    2.In the meantime, try to remain calm and avoid swallowing,
                    as this can cause the bone to move further down the throat.
                    <br />
                    3. Check for visible bones: Examine the neck area to see if
                    the bone is visible. If it is, gently try to remove it with
                    a pair of tweezers.
                    <br />
                    4.Provide first aid: If the bone is not visible or cannot be
                    removed with tweezers, provide first aid to the person by
                    tilting their head forward to prevent the bone from moving
                    further down the throat.
                    <br />
                    5.Seek medical attention: It is important to seek medical
                    attention immediately.A doctor will be able to examine the
                    person and remove the bone safely. Follow doctor's
                    instructions: Follow the doctor's instructions and take any
                    prescribed medications to aid in the healing process.
                    <br />
                    <br />
                    <b>Home-remedie:-</b>
                    <br />
                    1. Marshmallows It may sound strange, but a marshmallow
                    might be just what you need to get that bone out of your
                    throat. Chew the marshmallow just enough to soften it, then
                    swallow it in one big gulp. The sticky, sugary substance
                    grabs onto the bone and carries it down into your stomach.
                    <br />
                    2. Olive oil Olive oil is a natural lubricant. If you have a
                    fish bone stuck in your throat, try swallowing 1 or 2
                    tablespoons of straight olive oil. It should coat the lining
                    of your throat and the bone itself, making it easier for you
                    to swallow it down or cough it up.
                    <br />
                    3. Cough Most fish bones get stuck right at the back of your
                    throat, around your tonsils. A few forceful coughs may be
                    enough to shake it loose.
                    <br /> 4. Bananas Some people find that bananas, like
                    marshmallows, grab hold of fish bones and pull them down
                    into your stomach. Take a large bite of a banana and hold it
                    in your mouth for at least one minute. This will give it a
                    chance to soak up some saliva. After that, swallow it in one
                    big gulp. <br />
                    5. Bread and water Bread dipped in water is a classic trick
                    for getting stuck food out of your throat. Soak a piece of
                    bread in water for about a minute, then take a large bite
                    and swallow it whole. This method puts weight on the fish
                    bone and pushes it downward.
                    <br />
                    6. Soda For years, some health practitioners have been using
                    cola and other carbonated beverages to treat those with food
                    stuck in their throats. When soda enters your stomach, it
                    releases gasses. These gasses help disintegrate the bone and
                    build up pressure that can dislodge it. <br />
                    7. Vinegar Vinegar is very acidic. Drinking vinegar may help
                    break down the fish bone, making it softer and easier to
                    swallow. Try diluting 2 tablespoons of vinegar in a cup of
                    water or drinking 1 tablespoon straight. Apple cider vinegar
                    is a good option that does not taste too bad, especially
                    with honey.
                    <br />
                    <br />
                    <b>Note: </b> This is general advice and it's important to
                    seek professional medical help as soon as possible in case
                    of any foreign object stuck in the throat.
                </p>
                <Link to="../consult">
                    <button className="vidButton">Consult</button>
                </Link>
            </div>
        </main>
    );
};

export default Video1;
