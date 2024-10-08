'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import MotionWrapper from '../components/MotionWrapper';
import { supabase } from '../lib/supabase';
import { Idea, Tool, SaasProduct } from '../types';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';

const journeyStages = [
  { title: 'Ideation', description: 'Brainstorm and validate your SaaS idea', link: '/journey/ideation', icon: LightbulbOutlinedIcon },
  { title: 'Validation', description: 'Test your idea in the market', link: '/journey/validation', icon: CheckCircleOutlineOutlinedIcon },
  { title: 'Building', description: 'Develop your MVP and first version', link: '/journey/building', icon: BuildOutlinedIcon },
  { title: 'Growth', description: 'Acquire users and scale your operations', link: '/journey/growth', icon: TrendingUpOutlinedIcon },
  { title: 'Scale', description: 'Expand your product and reach new markets', link: '/journey/scale', icon: PieChartOutlinedIcon },
];

export default function HomePage() {
  const theme = useTheme();
  const [featuredIdea, setFeaturedIdea] = useState<Idea | null>(null);
  const [featuredTool, setFeaturedTool] = useState<Tool | null>(null);
  const [featuredStory, setFeaturedStory] = useState<SaasProduct | null>(null);

  useEffect(() => {
    async function fetchFeaturedContent() {
      const { data: ideaData } = await supabase.from('ideas').select('*').limit(1).single();
      const { data: toolData } = await supabase.from('tools').select('*').limit(1).single();
      const { data: storyData } = await supabase.from('saas_products').select('*').limit(1).single();

      setFeaturedIdea(ideaData);
      setFeaturedTool(toolData);
      setFeaturedStory(storyData);
    }

    fetchFeaturedContent();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Empower Your SaaS Founder Journey
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            From idea to successful SaaS product, we're here to support you every step of the way.
          </Typography>
          <Box textAlign="center" mb={6}>
            <Button variant="contained" color="secondary" size="large" component={Link} href="/journey/ideation">
              START YOUR JOURNEY
            </Button>
          </Box>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            The Founder's Journey
          </Typography>
          <Grid container spacing={4} mb={6}>
            {journeyStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Icon fontSize="large" color="primary" />
                        <Typography variant="h5" component="div" ml={1}>
                          {stage.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {stage.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button component={Link} href={stage.link} size="small" color="primary">
                        LEARN MORE
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Typography variant="h4" gutterBottom align="center" color="primary" mb={4}>
            Featured Content
          </Typography>
          <Grid container spacing={4}>
            {featuredIdea && (
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: theme.palette.primary.light }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom color="primary.contrastText">
                      Featured Idea
                    </Typography>
                    <Typography variant="body1" color="primary.contrastText">
                      {featuredIdea.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} href={`/ideas/${featuredIdea.id}`} size="small" color="secondary">
                      EXPLORE IDEA
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
            {featuredTool && (
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: theme.palette.secondary.light }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom color="secondary.contrastText">
                      Featured Tool
                    </Typography>
                    <Typography variant="body1" color="secondary.contrastText">
                      {featuredTool.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} href={`/tools/${featuredTool.id}`} size="small" color="primary">
                      EXPLORE TOOL
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
            {featuredStory && (
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: theme.palette.error.light }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom color="error.contrastText">
                      Featured Success Story
                    </Typography>
                    <Typography variant="body1" color="error.contrastText">
                      {featuredStory.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} href={`/success-stories/products/${featuredStory.id}`} size="small" color="secondary">
                      READ STORY
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </Grid>
        </MotionWrapper>
      </Container>
    </>
  );
}