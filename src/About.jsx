import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Welcome to our company! We are dedicated to providing excellent services and innovative solutions. Our team of professionals is committed to creating value for our customers and ensuring their success.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2" align="center">
                To deliver top-notch services that exceed customer expectations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2" align="center">
                To be the leading company in the industry, known for innovation and excellence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body2" align="center">
                Integrity, commitment, and teamwork are at the heart of everything we do.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

