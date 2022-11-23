import React from "react";
import CustomTable from "../formTable/CustomTable";
function ContentOperation({sendOperationData}) {

    let dataToSend=[]
    const setDataToSend=(newValue)=>{
        console.log("neew value >> " , newValue)
         sendOperationData(updateOrSet(dataToSend,newValue))
    }
    function updateOrSet(array, element) { // (1)
        const i = array.findIndex(_element => _element.field === element.field);
        if (i > -1) array[i] = element; // (2)
        else array.push(element);
        return array
    }


    const  OperationTableRows = [
        {
            name: "AD NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "AD NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "add_name",
                    autocompleteOptionsRemotly : [
                        // { label: "Facebook" , id:"fb" },
                        // { label: "Instagram" ,id:"intsa"},
                    ],
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "AUDIENCE INTEREST",
            fields: [
                { rowHeader: false, colHeader: true, text: "AUDIENCE INTEREST" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "audience_interest",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "TITLE",
            fields: [
                { rowHeader: false, colHeader: true, text: "TITLE" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "title",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "BODY",
            fields: [
                { rowHeader: false, colHeader: true, text: "BODY" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "body",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "LINK DISCRIPTION",
            fields: [
                { rowHeader: false, colHeader: true, text: "LINK DISCRIPTION" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "link_description",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "DISPLAY LINK",
            fields: [
                { rowHeader: false, colHeader: true, text: "DISPLAY LINK" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "display_link",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "IMAGE/VIDOE FILE NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "IMAGE/VIDOE FILE NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "image_video_file_name",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "PRODUCT 1 - LINK",
            fields: [
                { rowHeader: false, colHeader: true, text: "PRODUCT 1 - LINK" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "product_1_link",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "PRODUCT NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "PRODUCT NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "product_name",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "PRODUCT IMAGE HASH",
            fields: [
                { rowHeader: false, colHeader: true, text: "PRODUCT IMAGE HASH" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "product_image_hash",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "CALL TO ACTION",
            fields: [
                { rowHeader: false, colHeader: true, text: "CALL TO ACTION" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "call_to_action",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "STORE ID",
            fields: [
                { rowHeader: false, colHeader: true, text: "STORE ID" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "store_id",
                    sendData:(data)=>setDataToSend(data)
                },
            ],
        },
        {
            name: "APPROVAL NAME",
            fields: [
                { rowHeader: false, colHeader: true, text: "APPROVAL NAME" },
                {
                    rowHeader: false,
                    colHeader: false,
                    text: "",
                    typeInput: "autoComplete",
                    autocompleteId : "approval_name",
                    sendData:(data)=>setDataToSend(data)
                },

            ],
        },
    ];

    return (
     <div>
      <CustomTable
        tableRows={OperationTableRows}
        headerForm="Content Operation"
      ></CustomTable>
    </div>
  );
}

export default ContentOperation;
