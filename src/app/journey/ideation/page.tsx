'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { supabase } from '../../../lib/supabase';
import { Idea, Tool } from '../../../types';

export default function IdeationPage() {
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([]);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchRelatedContent() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'ideation')
        .limit(3);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'ideation')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setRelatedIdeas(ideasData || []);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setRelatedTools(toolsData || []);
    }

    fetchRelatedContent();
  }, []);

  const ideationTips = [
    "Focus on solving real problems",
    "Validate your idea with potential customers",
    "Research your competition thoroughly",
    "Consider your unique value proposition",
    "Think about scalability from the start"
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Ideation Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Brainstorm and validate your SaaS idea
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                About the Ideation Stage
              </Typography>
              <Typography variant="body1" paragraph>
                The ideation stage is where your SaaS journey begins. This is the time to explore problems, brainstorm solutions, and start shaping your product concept. It's crucial to validate your ideas early and often to ensure you're building something people actually need and want.
              </Typography>
              <Typography variant="h5" gutterBottom color="primary">
                Key Tips for Successful Ideation
              </Typography>
              <List>
                {ideationTips.map((tip, index) => (
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
                    <LightbulbOutlinedIcon sx={{ mr: 1 }} />
                    Next Steps
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Ready to move forward? Here's what you should focus on next:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Create a lean canvas" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Conduct customer interviews" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Build a basic prototype" />
                    </ListItem>
                  </List>
                  <Button variant="contained" color="primary" component={Link} href="/journey/validation">
                    Move to Validation Stage
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" gutterBottom color="primary" sx={{ mt: 6 }}>
            Related Ideas
          </Typography>
          <Grid container spacing={4}>
            {relatedIdeas.map((idea) => (
              <Grid item key={idea.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {idea.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {idea.description}
                    </Typography>
                  </CardContent>
                  <Button component={Link} href={`/ideas/${idea.id}`} size="small" color="primary">
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" gutterBottom color="primary" sx={{ mt: 6 }}>
            Useful Tools for Ideation
          </Typography>
          <Grid container spacing={4}>
            {relatedTools.map((tool) => (
              <Grid item key={tool.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
                  </CardContent>
                  <Button component={Link} href={`/tools/${tool.id}`} size="small" color="primary">
                    Explore Tool
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </MotionWrapper>
      </Container>
    </>
  );
}