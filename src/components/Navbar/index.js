import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"


function Navbar() {
    const navigate = useNavigate()

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <ArrowBackIcon fontSize="large" style={{ color: "#DBDBDB", }} />
                <div className={classes.leftText}>BACK TO DASHBOARD</div>
            </div>
            <div className={classes.right}>
                <div className={classes.rightText} onClick={() => navigate("/")}>PREVIOUS</div>
                <div className={classes.rightText} onClick={() => navigate("building-profile")}>NEXT</div>
            </div>
        </div>
    )
}

export default Navbar