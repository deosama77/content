import React from 'react';
import CampaignTable from '../../components/campaignTable/index';
import MainContainer from "../../components/MainContainer";
import {CardContent , Card} from "@mui/material";


function Campaign() {
    return <MainContainer>
        <Card sx={{overflow:'auto'}}>
            <CardContent>
        <CampaignTable></CampaignTable>
            </CardContent>
        </Card>
    </MainContainer>

}

export default Campaign;
