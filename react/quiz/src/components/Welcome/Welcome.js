import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlinePicture, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { BsChatLeft, BsPerson } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import './Welcome.css';
import { Container, Row } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function Welcome() {
    const [show, setShow] = useState(false);
    const [choose, setChoose] = useState("Choose Quiz");

    const handleDropDownList = () => {
        setShow(!show)
    }

    const handleChooseQuiz = e => {
        setChoose(e.target.value)
        setShow(!show)
    }

    return (
        <div className="welcome-page" >
            <div className="welcome" >
                <div className="welcome-navbar" >
                    <a>
                        <AiOutlinePicture className="welcome-icon" />
                    </a>
                    <a>
                        <BsChatLeft className="welcome-icon" />
                    </a>
                    <a>
                        <AiOutlineMail className="welcome-icon" />
                    </a>
                    <a>
                        <AiOutlinePrinter className="welcome-icon" />
                    </a>
                    <a>
                        <BiTimeFive className="welcome-icon" />
                    </a>
                </div>
                <div className="welcome-main">
                    <h1 id="welcome-title">Welcome back</h1>
                    <Link id="welcome-info" to="/record">
                        <BsPerson className="welcome-record" />
                    </Link>
                    <button className="quiz-chooser" onClick={handleDropDownList} >
                        < GiHamburgerMenu className="welcome-hamburger" />
                        <h2 className="welcome-hamburger-title">
                            {choose}
                        </h2>
                    </button>
                    {show &&
                        <div className="dropdownlist">
                            <Container>
                                <Row className="quiz-choice">
                                    <button onClick={handleChooseQuiz} className="quiz-choice-button" value='HTML' >HTML</button>
                                </Row>
                                <Row className="quiz-choice">
                                    <button onClick={handleChooseQuiz} className="quiz-choice-button" value='CSS' >CSS</button>
                                </Row>
                                <Row className="quiz-choice">
                                    <button onClick={handleChooseQuiz} className="quiz-choice-button2" value='JS' >JS</button>
                                </Row>
                            </Container>
                        </div>}

                    {!show && <button className="quiz-start" >

                        <h2 className="welcome-hamburger-title">
                            Start
                        </h2>
                    </button>}
                </div>
            </div>
        </div>
    )
}