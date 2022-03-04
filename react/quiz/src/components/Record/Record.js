import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import { BsPerson/* , BsPlusCircle */ } from "react-icons/bs";
import { Link } from "react-router-dom";
/* import { IoPersonCircle } from 'react-icons/io5'; */
import './Record.scss';
import { Container, Row } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Info() {
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
		<div className="record-page">
			<div className="welcome">
				<Nav />	
				<div className="record-main">
					<div className="record-main-icon">
						<Link id="welcome-info" to="/record">
							<BsPerson className="welcome-record" />
						</Link>
					</div>
					<h2>Profile</h2>
					<div className="record-profile">
						<button onClick={handleDropDownList} >
							<GiHamburgerMenu className="welcome-hamburger" />
							<h2 className="welcome-hamburger-title">
								{choose}
							</h2>
						</button>
						{show &&
							<div className="record-dropdownlist">
								<Container>
									<Row className="quiz-choice">
										<button onClick={handleChooseQuiz} value='HTML'>HTML</button>
									</Row>
									<Row className="quiz-choice">
										<button onClick={handleChooseQuiz} value='CSS'>CSS</button>
									</Row>
									<Row className="quiz-choice">
										<button onClick={handleChooseQuiz} value='JS'>JS</button>
									</Row>
								</Container>
							</div>
						}
						{!show && 
							<div className="profile-record">
								<h3>Score: 8/15</h3>
								<h3>Finished date: 2020/12/12</h3>
								<h3>Used time: 14mins 30s</h3>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}
