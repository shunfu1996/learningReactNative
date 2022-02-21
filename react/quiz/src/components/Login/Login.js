// import "./Login.css";
import "bulma";
// import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
import "./Login.scss";


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { auth } from "../../util/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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
                navigate("/login/");
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
        <div className="loginBox">
            <Link to="/welcome">go to Welcome page</Link>
            {isSignIn ?
                <>
                    <h1>Sign in</h1>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" name="email" placeholder="example@gmail.com" value={signInData.email} onChange={handleSignInDataChange} />
                            <span className="icon is-left">
                                <MdEmail />
                            </span>
                            <span className="icon is-right" onClick={() => console.log(123)}>
                                <IoIosAddCircle />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" name="password" placeholder="******" value={signInData.password} onChange={handleSignInDataChange} />
                            <span className="icon is-left">
                                <FaLock />
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={handleSignIn}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={handleCancelSignIn}>Cancel</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={() => setIsSignIn(false)}>Sign Up</button>
                        </div>
                    </div>

                </> : <>

                    <h1>Sign up</h1>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" name="email" placeholder="example@gmail.com" value={signUpData.email} onChange={handleSignUpDataChange} />
                            <span className="icon is-left">
                                <MdEmail />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" name="password" placeholder="******" value={signUpData.password} onChange={handleSignUpDataChange} />
                            <span className="icon is-left">
                                <FaLock />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" name="confirmPassword" placeholder="******" value={signUpData.confirmPassword} onChange={handleSignUpDataChange} />
                            <span className="icon is-left">
                                <FaLock />
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={handleSignUp}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={() => setIsSignIn(true)}>Go Back</button>
                        </div>
                    </div>
                </>}
        </div>
    )
}