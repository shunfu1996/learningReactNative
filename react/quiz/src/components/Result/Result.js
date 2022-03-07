import { useState, useEffect } from 'react';
import './Result.css';
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { GrPowerReset } from "react-icons/gr";
import { MdPreview } from "react-icons/md";
import { BsList, BsFillShareFill } from "react-icons/bs";

import { doc, collection, getDocs, addDoc } from "firebase/firestore";
import { dbFirebase, querySnapshot } from "../../util/firebase";
// import { auth } from "../../util/firebase";
import { getAuth } from "firebase/auth";

export default function Result({ seconds, setSeconds, choose, setChoose, score, setScore }) {

    const [userInfo, setUserInfo] = useState({
        email: '',
    });
    const user = getAuth().currentUser;
    useEffect(() => {
        if (user !== null) {
            setUserInfo(prevUserInfo => {
                return {
                    ...prevUserInfo,
                    email: user.email
                }
            })
        }
    }, [user])

    const handleFirestore = () => {
        try {
            /* const email = userInfo.email */
            const docRef = addDoc(collection(dbFirebase, userInfo.email), {
                score: { score },
                chooseQuiz: { choose },
                time: `${seconds}s`
            });

            console.log("Document written with ID: ", docRef.id);
            /* console.log("Document written with ID: ", userInfo); */
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    /* console.log("Document data:", querySnapshot.data()) */
    

    const handleRestart = () => {
        setScore(0);
        setSeconds(0);
    }

    const handleChooseQuiz = () => {
        setChoose("Choose Quiz")
    }

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
                    <p className="record">Time left: {300 - seconds}s</p>
                </div>
                <div>
                    <p className="New-Record">New Record!</p><p className="record" >Score: {score}/5</p>
                </div>
            </div>
            <div className='result'>
                <p>The Best Result</p>
            </div>
            <div className='title-box'>
                <p>{choose} Quiz</p>
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
                        <button onClick={handleRestart}><GrPowerReset /> START OVER</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <Link to="/answer" className="result-button">
                        <button><MdPreview /> REVIEW</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <Link to="/" className="result-button">
                        <button onClick={handleChooseQuiz}><BsList /> MENU</button>
                    </Link>
                </Row>
                <Row className="result-button">
                    <button onClick={handleFirestore}><BsFillShareFill /> upload to firestore</button>
                </Row>
            </Container>
        </div>

    )
}


