import React from "react";
import './Result.css';
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { GrPowerReset } from "react-icons/gr";
import { MdPreview } from "react-icons/md";
import { BsList, BsFillShareFill } from "react-icons/bs";

export default function Result({ choose, score }) {
    return (
        <div className="welcome">
            <div className='result'>
                <h1>Result</h1>
            </div>
            <div className='title-box'>
                <h1>{choose} Quiz</h1>
            </div>
            <div className='result-box'>
                <div>
                    <p className="record">Time left: 3:15</p>
                </div>
                <div>
                    <p className="New-Record">New Record!</p><p className="record" >Score: {score}/5</p>
                </div>
            </div>
            <div className='result'>
                <h1>The Best Result</h1>
            </div>
            <div className='title-box'>
                <h1>{choose} Quiz</h1>
            </div>
            <div className='result-box'>
                <div>
                    <p className="record">Time left: 9:15</p>
                </div>
                <div>
                    <p className="record">Score: 5/5</p>
                </div>
            </div>
            <Container>
                <Row>
                    <Link to="/quiz" className="result-button">
                        <button><GrPowerReset /> START OVER</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <Link to="/answer" className="result-button">
                        <button><MdPreview /> REVIEW</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <Link to="/" className="result-button">
                        <button><BsList /> MENU</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <button><BsFillShareFill /> SHARE</button>
                </Row>
            </Container>
        </div>

    )
}