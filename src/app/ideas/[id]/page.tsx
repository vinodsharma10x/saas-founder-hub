'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Idea } from '../../../types/Idea';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { Container, Typography, Button, Card, CardContent, Tabs, Tab, Box } from '@mui/material';

export default function IdeaPage({ params }: { params: { id: string } }) {
  const [idea, setIdea] = useState<Idea | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function fetchIdea() {
      try {
        const response = await fetch(`/api/ideas/${params.id}`);
        if (!response.ok) {
          notFound();
        }
        const data = await response.json();
        setIdea(data);
      } catch (error) {
        console.error('Failed to fetch idea:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    }
    fetchIdea();
  }, [params.id]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
          <Typography>Loading...</Typography>
        </Container>
      </>
    );
  }

  if (!idea) {
    return notFound();
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Button component={Link} href="/ideas" variant="text" sx={{ mb: 2 }}>
            ← Back to Ideas
          </Button>
          <Typography variant="h3" component="h1" gutterBottom>
            {idea.title}
          </Typography>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="body1" color="text.secondary" paragraph>
                {idea.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" component="span" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', px: 1, py: 0.5, borderRadius: '16px' }}>
                  {idea.category}
                </Typography>
              </Box>
              
              <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
                <Tab label="Details" />
                <Tab label="Solutions" />
                <Tab label="Market" />
              </Tabs>

              <Box>
                {activeTab === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Problem Statement</Typography>
                    <Typography paragraph>{idea.details}</Typography>
                    <Typography variant="h6" gutterBottom>Challenges</Typography>
                    <ul>
                      {idea.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {activeTab === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Potential Solutions</Typography>
                    <ul>
                      {idea.potentialSolutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {activeTab === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Market Potential</Typography>
                    <Typography paragraph>{idea.marketPotential}</Typography>
                  </motion.div>
                )}
              </Box>
            </CardContent>
          </Card>
        </MotionWrapper>
      </Container>
    </>
  );
}