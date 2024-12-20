import React from "react";
import ApolloCards from "./ApolloCard";

import img1 from "./images/Asthma.jpeg";
import img2 from "./images/Choke.jpeg";
import img3 from "./images/Heart.jpeg";
import img4 from "./images/StopBleed.jpeg";
import img5 from "./images/Rashes.jpg";
import img6 from "./images/SnakeBite.jpeg";
import img7 from "./images/drinkAware.jpg";
import img8 from "./images/fishBone.jpg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpeg";
import img11 from "./images/img11.jpeg";
const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
];

const university = ["Organizer"];
const title = [
    "Rashes on Skin",
    "Heart/Cardiac Attack ",
    "Difficult Breathing",
    "Fish bone stuck",
    "Asthma Attack",
    "Uncontrolled Bleed",
    "Alcohol Drink Aware",
    "Bitten by Snake",
];
const buttonName = [
    "video1",
    "video2",
    "video3",
    "video4",
    "video5",
    "video6",
    "video7",
    "video8",
];

const Apollo = () => {
    return (
        <main className="apolloPage">
            <h2 className="eventsHeading"> Emergency Aids</h2>

            <div className="liveEvents">
                <ApolloCards
                    images={img[4]}
                    title={title[0]}
                    university={university[0]}
                    buttonName={buttonName[0]}
                />
                <ApolloCards
                    images={img[2]}
                    title={title[1]}
                    university={university[0]}
                    buttonName={buttonName[1]}
                />
                <ApolloCards
                    images={img[1]}
                    title={title[2]}
                    buttonName={buttonName[2]}
                    university={university[0]}
                />
                <ApolloCards
                    images={img[7]}
                    title={title[3]}
                    buttonName={buttonName[3]}
                    university={university[0]}
                />
            </div>

            <div className="upcomingEvents">
                <ApolloCards
                    images={img[0]}
                    title={title[4]}
                    university={university[0]}
                    buttonName={buttonName[4]}
                />
                <ApolloCards
                    images={img[3]}
                    title={title[5]}
                    university={university[0]}
                    buttonName={buttonName[5]}
                />
                <ApolloCards
                    images={img[6]}
                    title={title[6]}
                    university={university[0]}
                    buttonName={buttonName[6]}
                />
                <ApolloCards
                    images={img[5]}
                    title={title[7]}
                    university={university[0]}
                    buttonName={buttonName[7]}
                />
            </div>
        </main>
    );
};

export default Apollo;
