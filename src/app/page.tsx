'use client';

import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import MotionWrapper from '../components/MotionWrapper';

const journeyStages = [
  { title: 'Ideation', description: 'Brainstorm and validate your SaaS idea', link: '/journey/ideation' },
  { title: 'Validation', description: 'Test your idea in the market', link: '/journey/validation' },
  { title: 'Building', description: 'Develop your MVP and first version', link: '/journey/building' },
  { title: 'Growth', description: 'Acquire users and scale your operations', link: '/journey/growth' },
  { title: 'Scale', description: 'Expand your product and reach new markets', link: '/journey/scale' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Empower Your SaaS Founder Journey
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            From idea to successful SaaS product, we're here to support you every step of the way.
          </Typography>
          <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '4rem' }}>
            <Button variant="contained" color="primary" size="large" component={Link} href="/journey/ideation">
              Start Your Journey
            </Button>
          </div>
          <Typography variant="h4" gutterBottom align="center">
            The Founder's Journey
          </Typography>
          <Grid container spacing={4}>
            {journeyStages.map((stage, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {stage.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stage.description}
                    </Typography>
                    <Button component={Link} href={stage.link} sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </MotionWrapper>
      </Container>
    </>
  );
}