import axios from 'axios';
import {basic_api,basic_operation, OPERATIONS_API} from './api';
import {ENGINEERINGS} from "./api";

export  const postNewOptions=(dialogValue , autocompleteId , headerForm="")=>{
    if(headerForm==="Content Engineering"){
        for(const engineering in ENGINEERINGS){
            if(autocompleteId===ENGINEERINGS[engineering]) {
                axios.post(basic_api + ENGINEERINGS[engineering],
                    {label: dialogValue.label}).then(response =>
                    console.log("Data is added ", response))
                    .catch(error => console.log(error))
            }
        }
    }else {
        for (const operation in OPERATIONS_API){
            if(autocompleteId===OPERATIONS_API[operation]) {
                axios.post(basic_operation + OPERATIONS_API[operation],
                    {label: dialogValue.label}).then(response =>
                    console.log("Data is added ", response))
                    .catch(error => console.log(error))
            }
        }
    }

}
