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
  TextField,
  Chip,
  Box
} from '@mui/material';
import Link from 'next/link';
import { Idea } from '../../types';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';

const journeyStages = ['Ideation', 'Validation', 'Building', 'Growth', 'Scale'];

export default function IdeasPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

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

  const filteredIdeas = ideas.filter(idea => 
    (idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     idea.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedStage || idea.stage === selectedStage)
  );

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
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
            SaaS Ideas
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search ideas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            {journeyStages.map((stage) => (
              <Chip
                key={stage}
                label={stage}
                onClick={() => setSelectedStage(selectedStage === stage ? null : stage)}
                color={selectedStage === stage ? "primary" : "default"}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </MotionWrapper>
        <Grid container spacing={3}>
          {filteredIdeas.map((idea: Idea) => (
            <Grid item key={idea.id} xs={12} sm={6} md={4}>
              <MotionWrapper>
                <Card>
                  <CardActionArea component={Link} href={`/ideas/${idea.id}`}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {highlightText(idea.title, searchTerm)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlightText(idea.description, searchTerm)}
                      </Typography>
                      <Chip label={idea.stage} color="primary" size="small" sx={{ mt: 1 }} />
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