import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['M', 'a', 't', 'i', 'c'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', '/', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`$letterClass _12`}>i</span>
                    <br/>
                    <span className={`$letterClass _13`}>I</span>
                    <span className={`$letterClass _14`}>'m<br/></span>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                </h1>
                <h2>Software Developer / Student</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;
