'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { supabase } from '../../../lib/supabase';
import { Idea, Tool } from '../../../types';

export default function ScalePage() {
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([]);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchRelatedContent() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'scale')
        .limit(3);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'scale')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setRelatedIdeas(ideasData || []);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setRelatedTools(toolsData || []);
    }

    fetchRelatedContent();
  }, []);

  const scaleTips = [
    "Expand into new markets or verticals",
    "Develop a robust financial strategy",
    "Build a strong company culture",
    "Implement advanced analytics and data-driven decision making",
    "Consider strategic partnerships or acquisitions"
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Scale Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Expand your product and reach new markets
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                About the Scale Stage
              </Typography>
              <Typography variant="body1" paragraph>
                The scale stage is about taking your successful SaaS business to new heights. This involves expanding into new markets, optimizing operations for efficiency, and potentially considering funding options or acquisitions. It's a phase of significant opportunity and challenge, requiring strategic thinking and careful management.
              </Typography>
              <Typography variant="h5" gutterBottom color="primary">
                Key Tips for Successful Scaling
              </Typography>
              <List>
                {scaleTips.map((tip, index) => (
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
                    <PieChartOutlinedIcon sx={{ mr: 1 }} />
                    Next Steps
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Congratulations on reaching the scale stage! Here's what you might consider next:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Explore international expansion" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Consider additional funding rounds or IPO" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Develop a long-term vision for your company" />
                    </ListItem>
                  </List>
                  <Button variant="contained" color="primary" component={Link} href="/success-stories">
                    Explore Success Stories
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