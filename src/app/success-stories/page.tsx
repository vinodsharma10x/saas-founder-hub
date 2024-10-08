'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';
import { SaasProduct, Founder, FounderProduct } from '../../types';
import { supabase } from '../../lib/supabase';

type SuccessStory = SaasProduct & { founders: (Founder & { role: string | null })[] };

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    async function fetchStories() {
      const { data: productsData, error: productsError } = await supabase
        .from('saas_products')
        .select('*')
        .order('founding_year', { ascending: false });

      if (productsError) {
        console.error('Error fetching products:', productsError);
        return;
      }

      const storiesWithFounders = await Promise.all(productsData.map(async (product) => {
        const { data: founderProductsData, error: founderProductsError } = await supabase
          .from('founder_product')
          .select('founder_id, role, founders(*)')
          .eq('product_id', product.id);

        if (founderProductsError) {
          console.error('Error fetching founder-product relations:', founderProductsError);
          return { ...product, founders: [] };
        }

        const founders = founderProductsData.map(fp => ({
          ...fp.founders,
          role: fp.role
        }));

        return { ...product, founders };
      }));

      setStories(storiesWithFounders);
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
              <Grid item key={story.id} xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {story.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {story.description}
                    </Typography>
                    <Chip label={story.category} color="primary" sx={{ mr: 1, mb: 1 }} />
                    <Chip label={`Founded: ${story.founding_year}`} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                    
                    {story.founders.map((founder) => (
                      <Grid container spacing={2} key={founder.id} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={4}>
                          <Avatar
                            alt={founder.name}
                            src={founder.linkedin_url || '/default-avatar.png'}
                            sx={{ width: 80, height: 80, mb: 1 }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography variant="subtitle1" gutterBottom>
                            {founder.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {founder.role || 'Founder'}
                          </Typography>
                          <Button component={Link} href={`/success-stories/founders/${founder.id}`} variant="outlined" size="small">
                            View Founder
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                    
                    <Button component={Link} href={`/success-stories/products/${story.id}`} variant="contained" sx={{ mt: 2 }}>
                      View Product
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
