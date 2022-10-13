import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeadingAndTip from "./../../components/HeadingAndTip"
import classes from "./ResidentMarketing.module.css"
import pic5 from "./../../assets/pic5.PNG"


function index() {
    return (
        <>
            <HeadingAndTip />
            <div className={classes.container}>
                <div className={classes.imageWrap}>
                    <img alt="" src={pic5} className={classes.image} />
                </div>
                <div className={classes.containerRight}>
                    <div>
                        <div className={classes.inner1}>
                            <div className={classes.innerText1}>PROJECTED <br />BUILDING VALUE</div>
                            <div className={classes.innerText2}>$4,068</div>
                        </div>
                        <div className={classes.innerPara}>Your building’s projected value is a 3x multiple of annual building net income. This assumes continued ownership and marketing of the building for three years.</div>
                    </div>
                    <div>
                        <div>
                            <div className={classes.innerText1}>BUILDING UNITS</div>
                            <div className={classes.innerText2}>120</div>
                        </div>
                        <div>
                            <div className={classes.innerText1}>AVG UNIT PRICE</div>
                            <div className={classes.innerText2}>$400,000</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default index