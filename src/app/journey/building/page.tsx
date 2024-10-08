'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { Idea, Tool } from '../../../types';
import { supabase } from '../../../lib/supabase';

export default function BuildingPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('*')
        .eq('stage', 'building')
        .limit(3);

      if (ideasError) console.error('Error fetching ideas:', ideasError);
      else setIdeas(ideasData || []);

      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'building')
        .limit(3);

      if (toolsError) console.error('Error fetching tools:', toolsError);
      else setTools(toolsData || []);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Building Stage
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Develop your MVP and first version of your SaaS product
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Key Building Considerations
          </Typography>
          <Typography variant="body1" paragraph>
            1. Choose the right tech stack
            2. Implement core features
            3. Ensure scalability from the start
            4. Focus on user experience and interface design
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Relevant Ideas
          </Typography>
          <Grid container spacing={4}>
            {ideas.map((idea) => (
              <Grid item key={idea.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {idea.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {idea.description}
                    </Typography>
                    <Button component={Link} href={`/ideas/${idea.id}`} sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button component={Link} href="/ideas" sx={{ mt: 2 }}>
            View All Ideas
          </Button>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Useful Tools
          </Typography>
          <Grid container spacing={4}>
            {tools.map((tool) => (
              <Grid item key={tool.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
                    <Button component={Link} href={`/tools/${tool.id}`} sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button component={Link} href="/tools" sx={{ mt: 2 }}>
            View All Tools
          </Button>
        </MotionWrapper>
      </Container>
    </>
  );
}
