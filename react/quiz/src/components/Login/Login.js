import "bulma";
// import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
// import "./Login.scss";


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoIosAddCircle, IoMdArrowRoundBack } from "react-icons/io";
import { MdArrowBack } from 'react-icons/md'
import { auth } from "../../util/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";
import { BsPerson } from 'react-icons/bs';


export default function LogIn() {

    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);

    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });

    const handleSignInDataChange = (event) => {
        const { name, value } = event.target;
        setSignInData({ ...signInData, [name]: value });
    };

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSignUpDataChange = (event) => {
        const { name, value } = event.target;
        setSignUpData({ ...signUpData, [name]: value });
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/welcome/");
            }
        });
    }, [navigate]);

    const handleSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, signInData.email, signInData.password)
            .then(() => {
                navigate("/welcome/");
            })
            .catch(() => alert("Invalid email or password!"));
    };

    const handleCancelSignIn = e => {
        e.preventDefault()
        navigate("/");
    };

    const handleSignUp = e => {
        e.preventDefault()
        if (signUpData.password !== signUpData.confirmPassword) {
            alert("Please confirm that password are the same!");
            return;
        }
        createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
            .then(() => {
                navigate("/welcome/");
            })
            .catch(err => alert(err.message));
    };

    return (
        <div >
            <Link to="/welcome">go to Welcome page</Link>
            {isSignIn ?
                <div className="welcome">
                    <a onClick={handleCancelSignIn} >
                        <IoMdArrowRoundBack />
                    </a>
                    <div className="login-main">
                        <h2>Quiz Game</h2>
                        <BsPerson className="quiz-logo" />

                        <div className="field">
                            <label>Log in</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" name="email" placeholder="UserName/Email" value={signInData.email} onChange={handleSignInDataChange} />
                                <span className="icon is-left">
                                    <MdEmail />
                                </span>
                                <span className="icon is-right" onClick={() => console.log(123)}>
                                    <IoIosAddCircle />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            {/* <label>Password</label> */}
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" name="password" placeholder="Password" value={signInData.password} onChange={handleSignInDataChange} />
                                <span className="icon is-left">
                                    <FaLock />
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="login-button" onClick={handleSignIn}>Submit</button>
                            </div>
                            {/* <div className="control">
                                <button className="login-button" onClick={handleCancelSignIn}>Cancel</button>
                            </div> */}
                            <div className="control">
                                <button className="login-button" onClick={() => setIsSignIn(false)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="welcome">
                    <div className="sign-up-main">

                        <h2 className="quiz-title">Sign up</h2>
                        <div className="field">
                            <label>Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" name="email" placeholder="example@gmail.com" value={signUpData.email} onChange={handleSignUpDataChange} />
                                <span className="icon is-left">
                                    <MdEmail />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" name="password" placeholder="******" value={signUpData.password} onChange={handleSignUpDataChange} />
                                <span className="icon is-left">
                                    <FaLock />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" name="confirmPassword" placeholder="******" value={signUpData.confirmPassword} onChange={handleSignUpDataChange} />
                                <span className="icon is-left">
                                    <FaLock />
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button onClick={handleSignUp}>Submit</button>
                            </div>
                            <div className="control">
                                <button onClick={() => setIsSignIn(true)}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}