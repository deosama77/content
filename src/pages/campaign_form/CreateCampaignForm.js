import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Card, CardActions, CardContent, Checkbox, FormControlLabel} from "@mui/material";
import MainContainer from "../../components/MainContainer";
import ContentEngineering from "../../components/engineering";
import ContentOperation from "../../components/operation";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import {basic_api, campaign_api} from "../../helper/api";
import ShowAlert from "../../components/ShowAlert";
import {SeverityModel} from '../../components/ShowAlert/Models'
import { useParams } from 'react-router-dom';
import  {updateOrSet} from './help'
function CreateCampaignForm() {

    const contentEngineeringTableRows = [
        {
            name: "Code",
            fields: [
                { rowHeader: false, colHeader: true, text: "CODE" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "code",
                    autocompleteOptionsRemotly : [
                    ],
                    sendData:(data)=>setDataToSend(data)
                }
            ],
        },
        {
            name: "PLATFORM",
            fields: [
                { rowHeader: false, colHeader: true, text: "PLATFORM" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "platform",
                    autocompleteOptionsRemotly : [],
                    sendData:(data)=>setDataToSend(data)
                }
            ],
        },
        {
            name: "PLACEMENT",
            fields: [
                { rowHeader: false, colHeader: true, text: "PLACEMENT" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "placement",
                    autocompleteOptionsRemotly : [
                        // { label: "Facebook" , id:"fb" },
                        // { label: "Instagram" ,id:"intsa"},
                        // { label: "Audience network" ,id:"network"},
                        // { label: "Messenger" ,id:"messenger"},
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "PAGE NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "PAGE NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "page_name",
                    autocompleteOptionsRemotly : [
                        // / { label: "Sense MY" , id:"sensMy" },

                    ],
                    sendData:(data)=>{setDataToSend(data)}
                },
            ],
        },
        {
            name: "CAMPAIGN NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "CAMPAIGN NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "campaign_name",
                    autocompleteOptionsRemotly : [],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "CAMPAIGN OBJECTIVE",
            fields: [
                { rowHeader: false, colHeader: true, text: "CAMPAIGN OBJECTIVE" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "campaign_objective",
                    autocompleteOptionsRemotly : [],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "RETARGETING",
            fields: [
                { rowHeader: false, colHeader: true, text: "RETARGETING" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "retargeting",
                    autocompleteOptionsRemotly : [
                        // { label: "Retargeting" , id:"Retargeting" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "ENGAGEMENT",
            fields: [
                { rowHeader: false, colHeader: true, text: "ENGAGEMENT" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "engagement",
                    autocompleteOptionsRemotly : [
                        // { label: "People who either completed or viewed at least 15 sec of your video (thruPlay)" ,
                        //     id:"People who either completed or viewed at least 15 sec of your video (thruPlay)" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "ADD SET NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "ADD SET NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "add_set_name",
                    autocompleteOptionsRemotly : [
                        // { label: "AddSetName" , id:"AddSetName" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "CUSTOM AUDIENCE",
            fields: [
                { rowHeader: false, colHeader: true, text: "CUSTOM AUDIENCE" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "useAutoCompleteMulti",
                    autocompleteId : "audience",
                    autocompleteOptionsRemotly : [
                        // { label: "Clothing" , id:"Clothing" },
                        // { label: "Instagram" , id:"Instagram" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "EXCLUDED CUSTOM",
            fields: [
                { rowHeader: false, colHeader: true, text: "EXCLUDED CUSTOM" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "excluded_custom",
                    autocompleteOptionsRemotly : [
                        // { label: "CRM list" , id:"CRM list" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
    ];

    const [isAlert,setIsAlert]=useState(false);
    const [messageAlert,setMessageAlert]=useState("");
    const [severityAlert,setSeverityAlert]=useState("info")
    const [bodyToSend,setBodyToSend]=useState({})
    const [checkTemplate,setCheckTemplate]=useState(false)
     const navigate =useNavigate();
    const {id}=useParams();

    let dataToSend=[]
    const setDataToSend=(newValue)=>{
        console.log("dataToSend > " , dataToSend)
        console.log("bodyToSend > " , bodyToSend)
        // sendEngineeringData(updateOrSet(dataToSend,newValue))
        setBodyToSend({...bodyToSend,[newValue.field]:newValue.value})
    }


    const handleClose=()=>{
          setAlertFun(false,"",SeverityModel.info)
           navigate("/")
    }

    const handleSubmit=()=>{
        const copyBodyToSend={...bodyToSend}
        for(const field in copyBodyToSend){
            if(typeof bodyToSend[field]==='object'){
                copyBodyToSend[field]=mapDataToString(bodyToSend[field])
            }

        }
        axios.post(basic_api+campaign_api, {
            ...copyBodyToSend
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

   // const sendEngineeringData=(engineeringdata)=>{
   //      if(engineeringdata&&engineeringdata.length)
   //         engineeringdata.forEach(data=> {
   //             if(typeof bodyToSend[data.field]=='object'){
   //                 filterArrayData(data)
   //             }else {
   //                 filterStringData(data)
   //             }
   //         })
   // }

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

    const handlCheckTemplate=()=>[
        setCheckTemplate(prev=>!prev)
    ]
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
                                    contentEngineeringTableRows={contentEngineeringTableRows}></ContentEngineering>

                                <FormControlLabel
                                    sx={{position:"fixed",left:40,bottom:4 , color:"blue" , fontSize:20}}
                                    control={<Checkbox checked={checkTemplate}
                                                       onChange={handlCheckTemplate}></Checkbox>} label="Save Template"></FormControlLabel>

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
