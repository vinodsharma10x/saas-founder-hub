'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';
import { SaasProduct, Founder } from '../../types';
import { supabase } from '../../lib/supabase';

type SuccessStory = SaasProduct & { founder: Founder };

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    async function fetchStories() {
      const { data, error } = await supabase
        .from('saas_products')
        .select(`
          *,
          founder:founders(*)
        `)
        .order('founding_year', { ascending: false });

      if (error) console.error('Error fetching success stories:', error);
      else setStories(data || []);
    }

    fetchStories();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Success Stories
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Learn from successful SaaS founders and their products
          </Typography>

          <Grid container spacing={4}>
            {stories.map((story) => (
              <Grid item key={story.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {story.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Founded by {story.founder.name} in {story.founding_year}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {story.description}
                    </Typography>
                    <Chip label={story.category} color="primary" sx={{ mr: 1 }} />
                    <Button component={Link} href={`/products/${story.id}`} sx={{ mt: 2 }}>
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
