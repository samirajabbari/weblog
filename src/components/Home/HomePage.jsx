import { Container, Grid, Typography } from "@mui/material";
import Authors from "../authors/Authors";
import BLogs from "../BLog/BLogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3} mt={4}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          {" "}
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <BLogs />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default HomePage;
