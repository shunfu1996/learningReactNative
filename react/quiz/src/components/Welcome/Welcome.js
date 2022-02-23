import React, { useState } from 'react';
import { Link/* , useNavigate */ } from "react-router-dom";
import { /* BsChatLeft, */ BsPerson } from "react-icons/bs";
/* import { AiOutlinePicture, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { auth } from '../../util/firebase';
import { signOut } from "firebase/auth"; */
import './Welcome.css';
import { Container, Row } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import Nav from '../../components/Nav/Nav';
import { html, css, js } from '../Data';


export default function Welcome({ choose, setChoose, setSelectQuiz }) {
    const [show, setShow] = useState(false);
    const [ ready, setReady] = useState(false)

    const handleDropDownList = () => {
        setShow(!show)
    }

    const handleChooseQuiz = e => {
        setChoose(e.target.value)
        setShow(!show)
        setReady(true)
    }
    
    const handleStart = () =>{
        if(choose === 'HTML' ){
            setSelectQuiz(html)
        }else if(choose === 'CSS'){
            setSelectQuiz(css)
        }else if(choose === 'JS'){
            setSelectQuiz(js)
        }
        return setChoose("Choose Quiz")
    }


    return (
        <div className="welcome-page" >
            <div className="welcome" >
                <Nav />
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

                    {!show &&

                        <div className="welcome-hamburger-title">
                            <Link to="/quiz">
                                <button className="quiz-start" onClick={handleStart} disabled={!ready}>
                                    Start
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}