'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '../../../types';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';
import { Container, Typography, Button, Card, CardContent, Tabs, Tab, Box, Chip } from '@mui/material';
import { supabase } from '../../../lib/supabase';

export default function ToolPage({ params }: { params: { id: string } }) {
  const [tool, setTool] = useState<Tool | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function fetchTool() {
      try {
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setTool(data);
        } else {
          router.push('/404');
        }
      } catch (error) {
        console.error('Failed to fetch tool:', error);
        router.push('/404');
      } finally {
        setIsLoading(false);
      }
    }
    fetchTool();
  }, [params.id, router]);

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

  if (!tool) {
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
          <Button component={Link} href="/tools" variant="text" sx={{ mb: 2 }}>
            ← Back to Tools
          </Button>
          <Typography variant="h3" component="h1" gutterBottom>
            {tool.name}
          </Typography>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="body1" color="text.secondary" paragraph>
                {tool.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip label={tool.category} color="primary" sx={{ mr: 1 }} />
                <Chip label={tool.pricing_model} color="secondary" />
              </Box>
              
              <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
                <Tab label="Details" />
                <Tab label="Features" />
                <Tab label="Company Info" />
              </Tabs>

              <Box>
                {activeTab === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Website</Typography>
                    <Typography paragraph>
                      <Link href={tool.website} target="_blank" rel="noopener noreferrer">
                        {tool.website}
                      </Link>
                    </Typography>
                    <Typography variant="h6" gutterBottom>Pricing Model</Typography>
                    <Typography paragraph>{tool.pricing_model}</Typography>
                  </motion.div>
                )}
                {activeTab === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Key Features</Typography>
                    <ul>
                      {tool.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {activeTab === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Typography variant="h6" gutterBottom>Founded</Typography>
                    <Typography paragraph>{tool.founded_year}</Typography>
                    <Typography variant="h6" gutterBottom>Company Size</Typography>
                    <Typography paragraph>{tool.company_size}</Typography>
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