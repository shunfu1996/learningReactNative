import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { AiFillPlayCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { BsStopCircleFill, BsStopCircle } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
/* import { html, css, js } from '../Data'; */



export default function Quiz({ seconds, setSeconds, choose, score, setScore, selectQuiz }) {
    const [selectA, setSelectA] = useState(false)
    const [selectB, setSelectB] = useState(false)
    const [selectC, setSelectC] = useState(false)
    const [selectD, setSelectD] = useState(false)
    const [chooseAnw, setChooseAnw] = useState(null)

    /* const [seconds, setSeconds] = useState(0); */
    const [isActive, setIsActive] = useState(true);

    const [questionIndex, setQuestionIndex] = useState(0);

    const [randomIndex, setRandomIndex] = useState([0, 1, 2, 3]);
    const handleRandomIndex = () => {
        setRandomIndex(randomIndex.sort(() => Math.random() - 0.5))
    }

    const toggle = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleChooseA = () => {
        setSelectA(true)
        setSelectB(false)
        setSelectC(false)
        setSelectD(false)
        setChooseAnw(document.getElementById("A").textContent) 
    }
    const handleChooseB = () => {
        setSelectA(false)
        setSelectB(true)
        setSelectC(false)
        setSelectD(false)
        setChooseAnw(document.getElementById("B").textContent) 
    }
    const handleChooseC = () => {
        setSelectA(false)
        setSelectB(false)
        setSelectC(true)
        setSelectD(false)
        setChooseAnw(document.getElementById("C").textContent) 
    }
    const handleChooseD = () => {
        setSelectA(false)
        setSelectB(false)
        setSelectC(false)
        setSelectD(true)
        setChooseAnw(document.getElementById("D").textContent)
    }

    const handleNext = () => {
        setSelectA(false)
        setSelectB(false)
        setSelectC(false)
        setSelectD(false)
        if (chooseAnw === selectQuiz[questionIndex].correctAnswer) {
            setScore(prev => prev + 1)
        }
        if (questionIndex !== selectQuiz.length - 1) {
            handleRandomIndex()
            setQuestionIndex(questionIndex + 1)
        }
    }

    return (
        <div className="welcome">
            <Container>
                <Row>
                    <Col>
                        <div className="time-control">
                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                {isActive ? <AiFillPlayCircle /> : <AiOutlinePlayCircle onClick={toggle} />}
                            </IconContext.Provider>
                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                {!isActive ? <BsStopCircleFill /> : <BsStopCircle onClick={toggle} />}
                            </IconContext.Provider>
                        </div>
                    </Col>
                    <Col>
                        <div className="time">
                            {300-seconds}s
                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                <BiTimer />
                            </IconContext.Provider>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='title-box'>
                <h1>{choose} Quiz</h1>
            </div>
            <div className={isActive ? 'question-box' : 'question-box pause'}>
                {isActive ?
                    <div>
                        <p>Q{questionIndex + 1}: {selectQuiz[questionIndex].questionTitle}</p>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <button onClick={handleChooseA} className={selectA ? "isanswer answer" : "answer"} >
                                        {/* <p>A.</p><p id="A" >{selectQuiz[questionIndex].answer[randomIndex[0]]}</p> */}
                                        <p>A.</p><div id="A" value={selectQuiz[questionIndex].answer[randomIndex[0]]}>{selectQuiz[questionIndex].answer[randomIndex[0]]}</div>
                                        <div className="tes">
                                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                                {!selectA ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                            </IconContext.Provider>
                                        </div>
                                    </button>
                                </Col>
                                <Col md={6}>
                                    <button onClick={handleChooseB} className={selectB ? "isanswer answer" : "answer"} >
                                        <p>B.</p><p id="B">{selectQuiz[questionIndex].answer[randomIndex[1]]}</p>
                                        <div className="tes">
                                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                                {!selectB ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                            </IconContext.Provider>
                                        </div>
                                    </button>
                                </Col>
                                <Col md={6}>
                                    <button onClick={handleChooseC} className={selectC ? "isanswer answer" : "answer"} >
                                        <p>C.</p><p id="C">{selectQuiz[questionIndex].answer[randomIndex[2]]}</p>
                                        <div className="tes">
                                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                                {!selectC ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                            </IconContext.Provider>
                                        </div>
                                    </button>
                                </Col>
                                <Col md={6}>
                                    <button onClick={handleChooseD} className={selectD ? "isanswer answer" : "answer"} >
                                        <p>D.</p><p id="D">{selectQuiz[questionIndex].answer[randomIndex[3]]}</p>
                                        <div className="tes">
                                            <IconContext.Provider value={{ className: "choose-anw" }}>
                                                {!selectD ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                            </IconContext.Provider>
                                        </div>
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    : <div className="pasue-logo"><IconContext.Provider value={{ size: "150px" }}>
                        <BsStopCircleFill />
                    </IconContext.Provider></div>}
            </div>
            <div className='next-qustion' >
                <button disabled={questionIndex <= 0} onClick={() => setQuestionIndex(questionIndex - 1)}>
                    Back
                </button>
                {questionIndex !== selectQuiz.length - 1 ?
                    <button onClick={handleNext}>
                        Next
                    </button>
                    :
                    <Link to="/result">
                        <button onClick={handleNext}>
                            Complete
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}