import "./Footer.css";
import { Container, Box, Grid } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
