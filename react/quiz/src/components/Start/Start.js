import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiLogIn } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { Container, Row } from 'react-bootstrap';




export default function Start () {

    const [ show, setShow] = useState(false)
    const [ choose, setChoose] =useState("Choose Quiz")

    const handleDropDownList = () => {
        setShow(!show)
    }
    const handleChooseQuiz = e => {
        setChoose(e.target.value)
        setShow(!show)
    }



    return(
        <>
            <div className="welcome" >
                <div className="start-page logo">
                    <Link to="/login">
                        <IconContext.Provider value={{ size:"50px", color: "blue", className: "global-class-name" }}>
                            <BiLogIn />
                        </IconContext.Provider>
                    </Link>
                </div>
                <div className="start-page">  
                    <button onClick={handleDropDownList} >
                        <div className="choose-icon">
                            <IconContext.Provider value={{ size:"50px", color: "black   ", className: "global-class-name" }}>
                                <BsList />
                            </IconContext.Provider>
                        </div>
                        <h1 className="choose" >{choose}</h1>
                    </button>
                </div>
                { show &&
                <div className="quiz-title">
                    <Container>
                        <Row className="quiz-title">
                            <button onClick={handleChooseQuiz} value='HTML' >HTML</button>
                        </Row>
                        <Row className="quiz-title">
                            <button onClick={handleChooseQuiz} value='CSS' >CSS</button>
                        </Row>
                        <Row className="quiz-title">
                            <button onClick={handleChooseQuiz} value='JS' >JS</button>
                        </Row>
                    </Container>
                </div> }
                <div className="start-page start-button">
                    <Link to="/quiz">
                        <button>
                            Start
                        </button>
                    </Link>
                </div>
            </div>


        </>
    )
}