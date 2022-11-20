import React from 'react';
import TableCampaign from './table/index';
import MainContainer from "../../components/MainContainer";
import {CardContent , Card} from "@mui/material";

function Campaign() {
    return <MainContainer>
        <Card sx={{overflow:'auto'}}>
            <CardContent>
        <TableCampaign></TableCampaign>
            </CardContent>
        </Card>
    </MainContainer>

}

export default Campaign;
