import React from 'react';
import { Route, Routes } from "react-router-dom";
import ResidentMarketing from "./../pages/ResidentMarketing";
import Navbar from "./../components/Navbar";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideContent from "./../components/SideContent"
import HeadingAndTip from "./../components/HeadingAndTip"
import BuildingProfile from "./../pages/BuildingProfile"
function Routing() {
    return (
        <div style={{ backgroundColor: "#E4E4E4" }}>

            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={1}>
                        <div style={{ backgroundColor: "#0083F2", width: "80%", height: "100vh" }}></div>
                    </Grid>
                    <Grid item xs={8} style={{ backgroundColor: "#F4F4F4", borderRadius: "10px", marginTop: "30px", marginBottom: "10px", padding: "20px 20px" }}>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<ResidentMarketing />} />
                            <Route exact path="/building-profile" element={<BuildingProfile />} />
                        </Routes>
                    </Grid>
                    <Grid item xs={3}>
                        <SideContent />
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Routing