import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular,faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={["A", "b", "o", "u", "t", " ", "m", "e"]} 
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>As an ambitious software developer, I'm eager to work on challenging projects that leverage the latest technologies. 
                    I have a solid foundation in software development and a constant desire to learn and grow. Known for being a quick learner, 
                    I continually seek opportunities to enhance my skills.
                </p>
                <p>I thrive in team environments, always ready to support and contribute 
                to collective success. My dedication, hard work, and confidence drive me to contribute meaningfully to any company's success.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4d9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
                    <div class="stars"></div>
                    <div class="stars2"></div>
                    <div class="stars3"></div>
            </div>
        </div>
    )
}

export default About;