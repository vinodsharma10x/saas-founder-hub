'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { supabase } from '../../../lib/supabase';
import { Idea, Tool } from '../../../types';

export default function ValidationPage() {
  const [relatedIdeas, setRelatedIdeas] = useState<Idea[]>([]);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchRelatedContent() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'validation')
        .limit(3);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'validation')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setRelatedIdeas(ideasData || []);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setRelatedTools(toolsData || []);
    }

    fetchRelatedContent();
  }, []);

  const validationTips = [
    "Conduct customer interviews",
    "Create a minimum viable product (MVP)",
    "Use landing pages to test demand",
    "Analyze competitor offerings",
    "Gather quantitative and qualitative feedback"
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Validation Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Test your idea in the market
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                About the Validation Stage
              </Typography>
              <Typography variant="body1" paragraph>
                The validation stage is crucial for confirming that your SaaS idea solves a real problem and that people are willing to pay for it. This stage involves testing your assumptions, gathering feedback, and refining your concept based on real-world data.
              </Typography>
              <Typography variant="h5" gutterBottom color="primary">
                Key Tips for Successful Validation
              </Typography>
              <List>
                {validationTips.map((tip, index) => (
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
                    <VerifiedUserOutlinedIcon sx={{ mr: 1 }} />
                    Next Steps
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Ready to move forward? Here's what you should focus on next:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Refine your MVP based on feedback" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Develop a product roadmap" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Start building your core team" />
                    </ListItem>
                  </List>
                  <Button variant="contained" color="primary" component={Link} href="/journey/building">
                    Move to Building Stage
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