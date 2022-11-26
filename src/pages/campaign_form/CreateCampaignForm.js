import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Card, CardActions, CardContent} from "@mui/material";
import MainContainer from "../../components/MainContainer";
import ContentEngineering from "../../components/engineering";
import ContentOperation from "../../components/operation";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import {basic_api, campaign_api} from "../../helper/api";
import ShowAlert from "../../components/ShowAlert";
import {SeverityModel} from '../../components/ShowAlert/Models'

function CreateCampaignForm() {
    const [isAlert,setIsAlert]=useState(false);
    const [messageAlert,setMessageAlert]=useState("");
    const [severityAlert,setSeverityAlert]=useState("info")
    const [bodyToSend,setBodyToSend]=useState({})
     const navigate =useNavigate();

    const handleClose=()=>{
          setAlertFun(false,"",SeverityModel.info)
           navigate("/")
    }

    const handleSubmit=()=>{
        for(const field in bodyToSend){
            if(typeof bodyToSend[field]==='object'){
                setBodyToSend({...bodyToSend,[field] : mapDataToString(bodyToSend[field])})
            }
        }
        axios.post(basic_api+campaign_api, {
            ...bodyToSend
        })
            .then(function (response) {
                if(response){
                    setAlertFun(true,"1 row is added successfully",SeverityModel.success)
                }
            })
            .catch(function (error) {
                if(error&&error.response&&error.response.data){
                        const errorData=error.response.data;
                        if(Object.keys(errorData).length)
                        setAlertFun(true,Object.keys(errorData)[0]+" : "+error.response.data[Object.keys(errorData)[0]],SeverityModel.error)

                }

            });
          // navigate("/")
    }

    const handleClear=()=>{
        navigate(0)
    }

    const setAlertFun=(isAlert,message,severity)=>{
        setIsAlert(isAlert);
        setMessageAlert(message)
        setSeverityAlert(severity)
    }

   const sendEngineeringData=(engineeringdata)=>{
        if(engineeringdata&&engineeringdata.length)
           engineeringdata.forEach(data=> {
               if(typeof bodyToSend[data.field]=='object'){
                   filterArrayData(data)
               }else {
                   filterStringData(data)
               }
           })
   }

    const sendOperationData=(operationData)=>{
        if(operationData&&operationData.length)
            operationData.forEach(data=> {
                if(typeof bodyToSend[data.field]=='object'){
                    filterArrayData(data)
                }else {
                    filterStringData(data)
                }

            })
    }

    const filterStringData=(data)=>{
     return data.value? setBodyToSend({...bodyToSend,[data.field]:data.value}):setBodyToSend({...bodyToSend,[data.field]:undefined});
    }

    const filterArrayData=(data)=>{
        return data.value?.length? setBodyToSend({...bodyToSend,[data.field]:data.value}):setBodyToSend({...bodyToSend,[data.field]:undefined});
    }

    const mapDataToString=(array)=>array.toString();

    return (
        <MainContainer>
            <Card sx={{overflow:'auto' , marginTop:2 , paddingBottom:12}}>
                <CardContent>
                    <Box sx={{ width: "100%", marginTop: 2, marginBottom: 4 }}>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={12}>
                                <ShowAlert
                                    open={isAlert}
                                    setOpen={setIsAlert}
                                    message={messageAlert}
                                    severity={severityAlert}
                                ></ShowAlert>
                            </Grid>
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
                <CardActions sx={{ position: "fixed", bottom: 2 , right:2,padding:0}}>

                    <Button sx={{marginRight:2}} variant="contained" size="middle" onClick={handleSubmit}>
                        Save
                    </Button>

                    <Button sx={{marginRight:1}} variant="contained" color="secondary" size="middle" onClick={handleClear}>
                        Clear
                    </Button>

                        <Button sx={{marginRight:2}} variant="contained" color="error" size="middle" onClick={handleClose}>
                            Close
                        </Button>

                </CardActions>
            </Card>
        </MainContainer>
    );
}

export default CreateCampaignForm;
