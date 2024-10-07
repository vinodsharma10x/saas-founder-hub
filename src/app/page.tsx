'use client';

import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to SaaS Founder Hub
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your one-stop resource for building and growing your SaaS business
          </Typography>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} href="/tools">
                Explore Tools
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" component={Link} href="/ideas">
                Browse Ideas
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}