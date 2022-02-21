import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { AiFillPlayCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { BsStopCircleFill, BsStopCircle} from "react-icons/bs";
import { BiTimer} from "react-icons/bi";
import { IconContext } from "react-icons";



export default function Quiz() {
    const [selectA, setSelectA ] = useState(false)
    const [selectB, setSelectB ] = useState(false)
    const [selectC, setSelectC ] = useState(false)
    const [selectD, setSelectD ] = useState(false)

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    
  
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
    }
    const handleChooseB = () => {
        setSelectA(false)
        setSelectB(true)
        setSelectC(false)
        setSelectD(false)
    }
    const handleChooseC = () => {
        setSelectA(false)
        setSelectB(false)
        setSelectC(true)
        setSelectD(false)
    }
    const handleChooseD = () => {
        setSelectA(false)
        setSelectB(false)
        setSelectC(false)
        setSelectD(true)
    }


    return(
        <div className="welcome">
            <Container>
                <Row>
                    <Col >
                        <div className="time-control"> 
                            <IconContext.Provider value={{className: "choose-anw" }}>
                                {isActive ? <AiFillPlayCircle /> : <AiOutlinePlayCircle onClick={toggle} />}
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "choose-anw" }}>
                                {!isActive ?<BsStopCircleFill />:<BsStopCircle onClick={toggle} />}
                            </IconContext.Provider>
                        </div>
                    </Col>
                    <Col >
                        <div className="time">
                            {seconds}
                            <IconContext.Provider value={{className: "choose-anw" }}>
                            <BiTimer />
                            </IconContext.Provider>
                        </div>
                    </Col>
                </Row>
            </Container>
            {isActive &&<div>
                <p>Q1 choose the biggest number?</p>
                <Container>
                    <Row>
                        <Col >
                            <button onClick={handleChooseA} className={selectA ?"isanswer answer": "answer"} >
                                <p>A.10</p>
                                <div className="tes">
                                    <IconContext.Provider value={{className: "choose-anw" }}>
                                        {!selectA ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                    </IconContext.Provider>
                                </div>
                            </button>
                        </Col>
                        <Col >
                            <button onClick={handleChooseB} className={selectB ?"isanswer answer": "answer"} >
                                <p>B.20</p>
                                <div className="tes">
                                    <IconContext.Provider value={{className: "choose-anw" }}>
                                        {!selectB ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                    </IconContext.Provider>
                                </div>
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col >
                            <button onClick={handleChooseC} className={selectC ?"isanswer answer": "answer"} >
                                <p>C.30</p>
                                <div className="tes">
                                    <IconContext.Provider value={{className: "choose-anw" }}>
                                        {!selectC ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                    </IconContext.Provider>
                                </div>
                            </button>
                        </Col>
                        <Col >
                            <button onClick={handleChooseD} className={selectD ?"isanswer answer": "answer"} >
                                <p>D.40</p>
                                <div className="tes">
                                    <IconContext.Provider value={{className: "choose-anw" }}>
                                        {!selectD ? <MdRadioButtonUnchecked /> : <MdRadioButtonChecked />}
                                    </IconContext.Provider>
                                </div>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>}
            {!isActive && <div className='stop'></div>}
           
            
        </div>
    )
}