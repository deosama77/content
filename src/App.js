import MainContainer from "./components/MainContainer";
import "./App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ContentEngineering from "./engineering";
import ContentOperation from "./operation";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent } from "@mui/material";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <MainContainer>
      <Card sx={{overflow:'auto'}}>
        <CardContent>
          <Box sx={{ width: "100%", marginTop: 2, marginBottom: 4 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6}>
                <ContentEngineering></ContentEngineering>
              </Grid>
              <Grid item xs={12} md={6}>
                <ContentOperation></ContentOperation>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions textAlign="right" sx={{ position: "fixed", bottom: 2 , right:2}}>
          <Button variant="contained" size="small">
            Next
          </Button>
          <Button variant="contained" color="error" size="small">
            Close
          </Button>
        </CardActions>
      </Card>
    </MainContainer>
  );
}

export default App;
