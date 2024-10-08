'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea,
  TextField
} from '@mui/material';
import Link from 'next/link';
import { Founder } from '../../types';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';

export default function FoundersPage() {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchFounders() {
      const { data, error } = await supabase
        .from('founders')
        .select('*');
      
      if (error) console.error('Error fetching founders:', error);
      else setFounders(data || []);
    }

    fetchFounders();
  }, []);

  const filteredFounders = founders.filter(founder => 
    founder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    founder.bio?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim() || !text) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.filter(String).map((part, i) => 
          regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        )}
      </span>
    );
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            SaaS Founders
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search founders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
        </MotionWrapper>
        <Grid container spacing={3}>
          {filteredFounders.map((founder: Founder, index: number) => (
            <Grid item key={founder.id} xs={12} sm={6} md={4}>
              <MotionWrapper delay={index * 0.1}>
                <Card>
                  <CardActionArea component={Link} href={`/founders/${founder.id}`}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {highlightText(founder.name, searchTerm)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlightText(founder.bio || '', searchTerm)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </MotionWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
