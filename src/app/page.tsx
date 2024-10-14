'use client';

import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import MotionWrapper from '../components/MotionWrapper';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import JourneyStageCard from '../components/JourneyStageCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Box sx={{ my: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
              The Founder's Journey
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mb: 4 }}>
              From idea to successful SaaS product, we're here to support you every step of the way.
            </Typography>
            <Grid container spacing={4}>
              {journeyStages.map((stage, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <MotionWrapper delay={index * 0.1}>
                    <JourneyStageCard {...stage} />
                  </MotionWrapper>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" size="large" href="/journey/ideation">
                Start Your Journey
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Explore Our Resources
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {features.map((feature, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <MotionWrapper delay={index * 0.1}>
                    <FeatureCard {...feature} />
                  </MotionWrapper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <MotionWrapper>
              <Typography variant="h5" component="h3" gutterBottom>
                Ready to start your SaaS journey?
              </Typography>
              <Button variant="contained" color="primary" size="large" href="/journey/ideation">
                Begin Your Journey
              </Button>
            </MotionWrapper>
          </Box>
        </Container>
      </main>
    </>
  );
}

const journeyStages = [
  {
    title: 'Ideation',
    description: 'Discover tools and resources for the ideation stage of your SaaS journey.',
    buttonText: 'EXPLORE IDEATION',
    color: '#FFF9C4',
    icon: 'ideation' as const,
  },
  {
    title: 'Validation',
    description: 'Discover tools and resources for the validation stage of your SaaS journey.',
    buttonText: 'EXPLORE VALIDATION',
    color: '#C8E6C9',
    icon: 'validation' as const,
  },
  {
    title: 'Building',
    description: 'Discover tools and resources for the building stage of your SaaS journey.',
    buttonText: 'EXPLORE BUILDING',
    color: '#BBDEFB',
    icon: 'building' as const,
  },
  {
    title: 'Growth',
    description: 'Discover tools and resources for the growth stage of your SaaS journey.',
    buttonText: 'EXPLORE GROWTH',
    color: '#FFE0B2',
    icon: 'growth' as const,
  },
  {
    title: 'Scale',
    description: 'Discover tools and resources for the scale stage of your SaaS journey.',
    buttonText: 'EXPLORE SCALE',
    color: '#E1BEE7',
    icon: 'scale' as const,
  },
];

const features = [
  {
    title: 'Founder\'s Journey',
    description: 'Navigate through different stages of your SaaS journey, from ideation to scale.',
    linkText: 'Explore Journey',
    linkHref: '/journey/ideation',
  },
  {
    title: 'SaaS Ideas',
    description: 'Get inspired with innovative SaaS ideas and market opportunities.',
    linkText: 'Discover Ideas',
    linkHref: '/ideas',
  },
  {
    title: 'Tools & Resources',
    description: 'Find the best tools and resources to build and grow your SaaS business.',
    linkText: 'View Tools',
    linkHref: '/tools',
  },
  {
    title: 'Success Stories',
    description: 'Learn from successful SaaS founders and their product journeys.',
    linkText: 'Read Stories',
    linkHref: '/success-stories',
  },
  {
    title: 'Community',
    description: 'Connect with fellow SaaS founders and share experiences.',
    linkText: 'Join Community',
    linkHref: '/community',
  },
  {
    title: 'Latest Insights',
    description: 'Stay updated with the latest trends and insights in the SaaS industry.',
    linkText: 'Read Insights',
    linkHref: '/insights',
  },
];
