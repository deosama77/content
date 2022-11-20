import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent } from "@mui/material";
import MainContainer from "../../components/MainContainer";
import ContentEngineering from "../../engineering";
import ContentOperation from "../../operation";
import {  useNavigate } from "react-router-dom";

function CreateContentForm() {
     const navigate =useNavigate();
    const handleClose=()=>{
           navigate("/")
    }
    const handleSubmit=()=>{
          navigate("/")
    }
 const bodyData={}

   const sendEngineeringData=(engineeringdata)=>{


       if(engineeringdata&&engineeringdata.length)
           engineeringdata.forEach(data=>filterData(data))
        console.log("sendEngineeringData<<< ", engineeringdata)
        console.log("bodyData<<< ", bodyData)

   }

    const sendOperationData=(operationData)=>{
        if(operationData&&operationData.length)
            operationData.forEach(data=>filterData)
        // console.log("sendOperationData<<< ", operationData)
        // console.log("bodyData<<< ", bodyData)
    }
    const filterData=(data)=>{
     return data.value? bodyData[data.field]=data.value:delete bodyData[data.field];
    }
    return (
        <MainContainer>
            <Card sx={{overflow:'auto' , marginTop:2}}>
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

                    <Button sx={{marginRight:2}} variant="contained" size="small" onClick={handleSubmit}>
                        Next
                    </Button>

                        <Button sx={{marginRight:1}} variant="contained" color="error" size="small" onClick={handleClose}>
                            Close
                        </Button>


                </CardActions>
            </Card>
        </MainContainer>
    );
}

export default CreateContentForm;
