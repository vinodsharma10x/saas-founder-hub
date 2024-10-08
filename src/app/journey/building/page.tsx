'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, CardMedia } from '@mui/material';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { supabase } from '../../../lib/supabase';
import { Idea, Tool } from '../../../types';

export default function BuildingPage() {
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([]);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchRelatedContent() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'Building')
        .limit(3);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('stage', 'Building')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setRelatedIdeas(ideasData || []);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setRelatedTools(toolsData || []);
    }

    fetchRelatedContent();
  }, []);

  const buildingTips = [
    "Focus on core features first",
    "Implement agile development methodologies",
    "Prioritize user experience and interface design",
    "Set up a robust testing and QA process",
    "Plan for scalability from the start"
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Building Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Develop your MVP and first version
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                About the Building Stage
              </Typography>
              <Typography variant="body1" paragraph>
                The building stage is where your SaaS product starts to take shape. This phase involves developing your minimum viable product (MVP), iterating based on user feedback, and preparing for launch. It's crucial to balance speed with quality and to keep your users' needs at the forefront of development.
              </Typography>
              <Typography variant="h5" gutterBottom color="primary">
                Key Tips for Successful Building
              </Typography>
              <List>
                {buildingTips.map((tip, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={tip} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    <BuildOutlinedIcon sx={{ mr: 1 }} />
                    Next Steps
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Ready to move forward? Here's what you should focus on next:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Prepare for product launch" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Develop a marketing strategy" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Set up customer support processes" />
                    </ListItem>
                  </List>
                  <Button variant="contained" color="primary" component={Link} href="/journey/growth">
                    Move to Growth Stage
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" gutterBottom color="primary" sx={{ mt: 6 }}>
            Useful Tools for Building
          </Typography>
          <Grid container spacing={4}>
            {relatedTools.map((tool) => (
              <Grid item key={tool.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 140, objectFit: 'contain', p: 2 }}
                    image={tool.logo_url}
                    alt={tool.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div" gutterBottom>
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
                  </CardContent>
                  <Button component={Link} href={`/tools/${tool.id}`} size="small" color="primary" sx={{ m: 2 }}>
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Related Ideas and Useful Tools sections remain the same */}
          {/* ... */}
        </MotionWrapper>
      </Container>
    </>
  );
}