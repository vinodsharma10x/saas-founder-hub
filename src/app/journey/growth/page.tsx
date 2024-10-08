'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { supabase } from '../../../lib/supabase';
import { Idea, Tool } from '../../../types';

export default function GrowthPage() {
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([]);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchRelatedContent() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'growth')
        .limit(3);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'growth')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setRelatedIdeas(ideasData || []);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setRelatedTools(toolsData || []);
    }

    fetchRelatedContent();
  }, []);

  const growthTips = [
    "Implement a strong customer acquisition strategy",
    "Focus on customer retention and reducing churn",
    "Optimize your pricing strategy",
    "Invest in content marketing and SEO",
    "Leverage partnerships and integrations"
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Growth Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Acquire users and scale your operations
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                About the Growth Stage
              </Typography>
              <Typography variant="body1" paragraph>
                The growth stage is all about scaling your SaaS business. This involves acquiring new customers, retaining existing ones, and optimizing your operations. It's a critical phase where you'll need to balance rapid expansion with maintaining product quality and customer satisfaction.
              </Typography>
              <Typography variant="h5" gutterBottom color="primary">
                Key Tips for Successful Growth
              </Typography>
              <List>
                {growthTips.map((tip, index) => (
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
                    <TrendingUpIcon sx={{ mr: 1 }} />
                    Next Steps
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Ready to move forward? Here's what you should focus on next:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Expand your team strategically" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Explore new market opportunities" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Optimize operational efficiency" />
                    </ListItem>
                  </List>
                  <Button variant="contained" color="primary" component={Link} href="/journey/scale">
                    Move to Scale Stage
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Related Ideas and Useful Tools sections remain the same */}
          {/* ... */}
        </MotionWrapper>
      </Container>
    </>
  );
}