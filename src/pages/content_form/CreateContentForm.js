import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent } from "@mui/material";
import MainContainer from "../../components/MainContainer";
import ContentEngineering from "../../engineering";
import ContentOperation from "../../operation";
import {Link} from "react-router-dom";


function CreateContentForm() {
   const sendEngineeringData=(data)=>{
        console.log("sendEngineeringData<<< ", data)
    }

    const sendOperationData=(data)=>{
        console.log("sendOperationData<<< ", data)
    }
    return (
        <MainContainer>
            <Card sx={{overflow:'auto'}}>
                <CardContent>
                    <Box sx={{ width: "100%", marginTop: 2, marginBottom: 4 }}>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={6}>
                                <ContentEngineering
                                    sendEngineeringData={sendEngineeringData}></ContentEngineering>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ContentOperation
                                    sendOperationData={sendOperationData}
                                ></ContentOperation>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <CardActions sx={{ position: "fixed", bottom: 2 , right:2}}>
                    <Link to={"/"}>
                    <Button variant="contained" size="small">
                        Next
                    </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button variant="contained" color="error" size="small">
                            Close
                        </Button>
                    </Link>

                </CardActions>
            </Card>
        </MainContainer>
    );
}

export default CreateContentForm;
