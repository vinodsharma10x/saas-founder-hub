'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea 
} from '@mui/material';
import Link from 'next/link';
import { Idea } from '../../types';
import Navbar from '../../components/Navbar';

export default function IdeasPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    async function fetchIdeas() {
      const { data, error } = await supabase
        .from('ideas')
        .select('*');
      
      if (error) console.error('Error fetching ideas:', error);
      else setIdeas(data || []);
    }

    fetchIdeas();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          SaaS Ideas
        </Typography>
        <Grid container spacing={3}>
          {ideas.map((idea: Idea) => (
            <Grid item key={idea.id} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} href={`/ideas/${idea.id}`}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {idea.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {idea.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}