import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from "./BuildingProfile.module.css"
import handImg from "./../../assets/handImg.PNG"
import pic3 from "./../../assets/pic3.png"


function index() {
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.container}>
            <Grid container spacing={2} >
                <Grid item xs={7}>
                    <div className={classes.headingSmall}>BUILDING PROFILE</div>
                    <div className={classes.headingLarge}>An enhanced description<br /> and amenity list accurately<br /> showcases your building to <br />buyers and sellers</div>

                </Grid>

                <Grid item xs={5}>
                    <div className={classes.tipWrap}>
                        <div className={classes.tipWrapInner}>
                            <div className={classes.tipHeading}>HELPFUL TIP</div>
                            <img alt="" src={handImg} className={classes.hand} />
                        </div>

                        <div className={classes.tipPara}>A unique building description will bring more search traffic and leads to your page. We recommend a minimum of 300 words, but the longer the better for best results.</div>
                    </div>
                </Grid>

            </Grid>
            <Grid>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <div className={classes.imageWrap}>
                            <img alt="" src={pic3} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default index