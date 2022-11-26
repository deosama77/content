import { createData } from './helper';
export const rows = [
    //code                                    Campaign Name , Page Name,Campaign Objective, Ad Set Name ,Ad Name
    createData('Facebook Ads_IMC5916_Msg Ads_Cecilia', 'SENSE MY_MESSAGES_CONVERSIONS_Sales FB', 'Sense MY', 'Reach', '24-50,FEMALE'),
    createData('Facebook Ads_IMC6012_Msg Ads_Cecilia', 'SENSE MY_MESSAGES_CONVERSIONS_Sales FB', 'Sense MY', 'Message', '24-50,FEMALE'),
    createData('Facebook Ads_IMC6013_Msg Ads_Cecilia', 'SENSE MY_MESSAGES_CONVERSIONS_Sales FB', 'Sense MY', 'Video View', '24-50,FEMALE'),
    createData('Facebook Ads_IMC5997_Msg Ads_Cecilia', 'SENSE MY_MESSAGES_CONVERSIONS_Sales FB', 'Sense MY', 'Reach', '24-50,FEMALE')
];

export const headCells = [
    {
        id: 'code',
        numeric: false,
        disablePadding: true,
        label: 'Code'
    },
    {
        id: 'campaign_name',
        numeric: false,
        disablePadding: true,
        label: 'Campaign Name'
    },

    {
        id: 'PAGE_NAME',
        numeric: false,
        disablePadding: true,
        label: 'PAGE NAME'
    },
    {
        id: 'Campaign_Objective',
        numeric: false,
        disablePadding: true,
        label: 'Campaign Objective'
    },
    {
        id: 'Ad_Set_Name',
        numeric: false,
        disablePadding: true,
        label: 'Ad Set Name'
    },
    {
        id: 'edit',
        numeric: false,
        disablePadding: false,
        label: ''
    }
];
