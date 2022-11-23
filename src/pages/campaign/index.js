import React from 'react';
import TableCampaign from './table/index';
import MainContainer from "../../components/MainContainer";
import {CardContent , Card} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
