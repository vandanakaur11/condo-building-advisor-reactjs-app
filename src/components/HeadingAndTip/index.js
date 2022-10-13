import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from "./HeadingAndTip.module.css"
import handImg from "./../../assets/handImg.PNG"


function index() {
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.container}>
            <Grid container spacing={2} >
                <Grid item xs={7}>
                    <div className={classes.headingSmall}>RESIDENT MARKETING</div>
                    <div className={classes.headingLarge}>TOWER RESIDENCES AT THE <br />RITZ-CARLTON</div>
                    <div className={classes.para}>Use our tools to connect with building residents and others to<br /> grow listings and sales in your building.</div>
                </Grid>

                <Grid item xs={5}>
                    <div className={classes.tipWrap}>
                        <div className={classes.tipWrapInner}>
                            <div className={classes.tipHeading}>HELPFUL TIP</div>
                            <img alt="" src={handImg} className={classes.hand} />
                        </div>

                        <div className={classes.tipPara}>The key to establishing relationships is fast response time and frequent follow-up. Buyers and sellers want local knowledge from their agent and your building provides a hyper-local target market for you to prospect.</div>
                    </div>
                </Grid>

            </Grid>
        </Box>
    )
}

export default index