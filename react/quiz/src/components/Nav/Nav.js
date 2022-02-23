import React from 'react';
import { AiOutlinePicture/* , AiOutlineMail */, AiOutlinePrinter, AiOutlinePlayCircle } from "react-icons/ai";
import { BsChatLeft/* , BsPlay */ } from "react-icons/bs";
/* import { BiTimeFive } from "react-icons/bi"; */
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { auth } from '../../util/firebase';
import { signOut } from "firebase/auth";

export default function Navbar() {

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/login/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className="welcome-navbar" >
            <Link to="/record" >
                <AiOutlinePicture className="welcome-icon" />
            </Link>
            <Link to="#" >
                <BsChatLeft className="welcome-icon" />
            </Link>
            <Link to="/welcome" >
                <AiOutlinePlayCircle className="welcome-icon" />
            </Link>
            <Link to="#" >
                <AiOutlinePrinter className="welcome-icon" />
            </Link>
            <Link to="#" onClick={handleSignOut}>
                <FiLogOut className="welcome-icon" />
            </Link>
        </div>
    )
}
