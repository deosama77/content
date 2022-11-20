import React from "react";
import CustomTable from "../components/table/CustomTable";

function ContentEngineering({sendEngineeringData=()=>{}}) {
    let dataToSend=[]
    const setDataToSend=(newValue)=>{
        console.log("newValue >>  " , newValue)
        sendEngineeringData(updateOrSet(dataToSend,newValue))
    }
    function updateOrSet(array, element) { // (1)
        const i = array.findIndex(_element => _element.field === element.field);
        if (i > -1) array[i] = element; // (2)
        else array.push(element);
        return array
    }
   const ContentEngineeringTableRows = [
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
                    autocompleteOptionsRemotly : [
                        { label: "Facebook" , id:"fb" },
                        { label: "Instagram" ,id:"intsa"},
                    ],
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
                        { label: "Facebook" , id:"fb" },
                        { label: "Instagram" ,id:"intsa"},
                        { label: "Audience network" ,id:"network"},
                        { label: "Messenger" ,id:"messenger"},
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
                    autocompleteId : "pageName",
                    autocompleteOptionsRemotly : [
                        { label: "Sense MY" , id:"sensMy" },

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
                    autocompleteId : "campaignName",
                    autocompleteOptionsRemotly : [
                        { label: "Sense_Aware_Reach_Sales_Insta" , id:"Sense_Aware_Reach_Sales_Insta" },
                        { label: "Sense_Aware_Video_Sales_Insta" ,id:"Sense_Aware_Video_Sales_Insta"},
                        { label: "Sense_Traffic_Sales_Insta" ,id:"Sense_Traffic_Sales_Insta"},
                        { label: "Sense_Lead form_Sales_Insta" , id:"Sense_Lead form_Sales_Insta" },
                        { label: "Sense_Lead message_Sales_Insta" ,id:"Sense_Lead message_Sales_Insta"},
                        { label: "Sense_Engagement_Sales_Insta" , id:"Sense_Engagement_Sales_Insta" },

                    ],
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
                    autocompleteId : "campaignObject",
                    autocompleteOptionsRemotly : [
                        { label: "Brand awareness" , id:"Brand awareness" },
                        { label: "Reach" ,id:"Reach"},
                        { label: "Traffic" , id:"Traffic" },
                        { label: "App Install" ,id:"App instll"},
                        { label: "Video views" , id:"Video views" },
                        { label: "Lead generation" ,id:"Lead generation"},
                        { label: "Post engagment" , id:"Post engagmen" },
                        { label: "Page likes" ,id:"Page likes"},
                        { label: "Event response" , id:"Event response" },
                        { label: "Messages" ,id:"Messages"},
                        { label: "Conversions" ,id:"Canversions"},
                        { label: "Catalog sales" ,id:"Catalog sales"},
                    ],
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
                        { label: "Retargeting" , id:"Retargeting" },
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
                        { label: "SPeople who either completed or viewed at least 15 sec of your video (thruPlay)" , id:"People who either completed or viewed at least 15 sec of your video (thruPlay)" },
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
                    autocompleteId : "addSetName",
                    autocompleteOptionsRemotly : [],
                },
            ],
            sendData:(data)=>setDataToSend(data)
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
                    autocompleteId : "customAudience",
                    autocompleteOptionsRemotly : [
                        { label: "Clothing" , id:"Clothing" },
                        { label: "Instagram" , id:"Instagram" },
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
                    autocompleteId : "excludedCustom",
                    autocompleteOptionsRemotly : [
                        { label: "CRM list" , id:"CRM list" },
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
    ];

    return (
    <div>
      <CustomTable
        tableRows={ContentEngineeringTableRows}
        headerForm="Content Engineering"
      ></CustomTable>
    </div>
  );
}

export default ContentEngineering;
