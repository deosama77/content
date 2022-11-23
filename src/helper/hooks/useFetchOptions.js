import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {
    add_set_name_api,
    basic_api,
    campaign_name_api,
    campaign_objective_api,
    code_api, engagement_api, exclude_custom_api,
    page_name_api,
    placement_api,
    platform_api, retargeting_api,
    OPERATIONS_API,
    basic_operation
} from "../api";
import {OPERATIONS_AUTOCOMPLETEDID} from '../constants'

function UseFetchOptions(autocompleteId="", autocompleteOptionsRemotely=[]) {

    const [autocompleteOptions, setAutocompleteOptions] = useState(autocompleteOptionsRemotely);

    const fetchCode=useCallback(()=>{
        if(autocompleteId==='code') {
            axios.get(basic_api + code_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='platform'){
            axios.get(basic_api + platform_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='placement'){
            axios.get(basic_api + placement_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='page_name'){
            axios.get(basic_api + page_name_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='campaign_name'){
            axios.get(basic_api + campaign_name_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='campaign_objective'){
            axios.get(basic_api + campaign_objective_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='retargeting'){
            axios.get(basic_api + retargeting_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))

        }else if(autocompleteId==='engagement'){
            axios.get(basic_api + engagement_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }else if(autocompleteId==='add_set_name'){

            axios.get(basic_api + add_set_name_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }else if(autocompleteId==='excluded_custom'){

            axios.get(basic_api + exclude_custom_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId==='excluded_custom'){

            axios.get(basic_api + exclude_custom_api).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.audience_interest){
            axios.get(basic_operation + OPERATIONS_API.audience_interest).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.add_name){
            axios.get(basic_operation + OPERATIONS_API.add_name).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.body){
            axios.get(basic_operation + OPERATIONS_API.body).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.title){
            axios.get(basic_operation + OPERATIONS_API.title).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.approval_name){
            axios.get(basic_operation + OPERATIONS_API.approval_name).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.call_to_action){
            axios.get(basic_operation + OPERATIONS_API.call_to_action).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.store_id){
            axios.get(basic_operation + OPERATIONS_API.store_id).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.image_video_file_name){
            axios.get(basic_operation + OPERATIONS_API.image_video_file_name).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.product_image_hash){
            axios.get(basic_operation + OPERATIONS_API.product_image_hash).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

        else if(autocompleteId===OPERATIONS_AUTOCOMPLETEDID.product_name){
            axios.get(basic_operation + OPERATIONS_API.product_name).then(response => {
                setAutocompleteOptions([...response.data])
            }).catch(error => console.log(error))
        }

    },[setAutocompleteOptions,autocompleteId])

    useEffect(()=>{
        fetchCode();
    },[fetchCode])
     return [autocompleteOptions, setAutocompleteOptions]
}

export default UseFetchOptions;
