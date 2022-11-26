import "./App.css";


import TableCampaign from "./components/campaignTable";
import MainContainer from "./components/MainContainer";
import {Card, CardContent} from "@mui/material";

function App() {

  return (

      <MainContainer>
        <TableCampaign></TableCampaign>
      </MainContainer>

  );
}

export default App;
