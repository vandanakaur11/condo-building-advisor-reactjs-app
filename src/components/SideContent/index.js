import React from 'react'
import classes from "./SideContent.module.css"
import pic1 from "./../../assets/pic1.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import pic2 from "./../../assets/pic2.png"
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function index() {
    return (
        <div className={classes.sideContentWrap}>
            <div className={classes.topSection}>
                <div className={classes.topSectionTop}>
                    <div className={classes.topSectionLeft}>LISTING ACQUISITION CAMPAIGN</div>
                    <div className={classes.topSectionRight}>Active</div>
                </div >
                <div className={classes.topSectionBottom}>Pilot House Potafino I.</div>
            </div>
            <div className={classes.bottomSection}>
                <div className={classes.bottomWrap1}>
                    <div className={classes.bottomWrap1Left}>ADVISOR PROFILE</div>
                    <div className={classes.bottomWrap1Right}>EDIT</div>
                </div>
                <div className={classes.profileSec}>
                    <div className={classes.profileSecInner}>
                        <img src={pic1} alt="" className={classes.profileImg} />
                        <div>
                            <div className={classes.profileSecHeading}>Richard Swerdlow</div>
                            <div className={classes.profileSecSubHeading}>Building Advisor</div>
                            <div><FacebookIcon className={classes.social} />
                                <TwitterIcon className={classes.social} />
                                <InstagramIcon className={classes.social} />
                                <LinkedInIcon className={classes.social} />
                            </div>
                        </div>
                    </div>
                    <img src={pic2} alt="" className={classes.profileSecImg} />
                </div>
                <div className={classes.scoreTop}>
                    <div className={classes.scoreTopText}>BUILDING PROFILE SCORE</div>
                    <div className={classes.scoreTopInner}>
                        <OpenInNewIcon style={{ color: "#a3a3a3" }} />
                        <div>VIEW</div>
                    </div>
                </div>
                <div className={classes.progressBar}>
                    <LinearProgress style={{ backgroundColor: "green", height: "10px" }} />
                </div>
                <div className={classes.scorePara}>Your building score is 235 / 1000. Adding a description, amenities, and photos will increase the score. We recommend a minimum score of 600 </div>
                <div className={classes.scoreTop}>
                    <div className={classes.scoreTopText}>BUILDING PROFILE</div>
                    <div className={classes.scoreTopInner}>
                        <OpenInNewIcon style={{ color: "#a3a3a3" }} />
                        <div>VIEW</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>DESCRIPTION & AMENITIES</div>
                    <CheckCircleIcon style={{ color: "#45AF08" }} />
                </div>
                <div className={classes.buildProfle1}>
                    <div>PHOTOS & FLOOR PLANS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>12</div>
                        <CheckCircleIcon style={{ color: "#45AF08" }} />
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>DESCRIPTION & AMENITIES</div>
                    <div className={classes.Btn}>UPLOAD</div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>DESCRIPTION & AMENITIES</div>
                    <CheckCircleIcon style={{ color: "#45AF08" }} />
                </div>
                <div className={classes.scoreTop}>
                    <div className={classes.scoreTopText}>BUILDING PROFILE</div>
                    <div className={classes.scoreTopInner}>

                        <div className={classes.unit}>123 <span>UNITS</span></div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>LISTING PRESENTATION</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>12</div>
                        <div className={classes.Btn}>SEND</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>POSTCARDS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>10 / mo</div>
                        <div className={classes.Btn}>SEND</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>SOCIAL POSTS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>12</div>
                        <div className={classes.Btn}>POST</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>BUILDING REPORTS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>12</div>
                        <div className={classes.Btn}>SHARE</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>CONTENT LIBRARY</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>4</div>
                        <div className={classes.Btn}>SHARE</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>ACTIVITY ALERTS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>2</div>
                        <div className={classes.Btn}>SHARE</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>BUILDING TIMES</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>2</div>
                        <div className={classes.Btn}>SHARE</div>
                    </div>
                </div>
                <div className={classes.buildProfle1}>
                    <div>FEATURED LISTINGS</div>
                    <div className={classes.buildProfle1Inner}>
                        <div className={classes.count}>2</div>
                        <div className={classes.Btn}>SHARE</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index