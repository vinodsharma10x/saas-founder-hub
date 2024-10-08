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
import { Tool } from '../../types';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';

const journeyStages = ['Ideation', 'Validation', 'Building', 'Growth', 'Scale'];

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTools() {
      const { data, error } = await supabase
        .from('tools')
        .select('*');
      
      if (error) console.error('Error fetching tools:', error);
      else setTools(data || []);
    }

    fetchTools();
  }, []);

  const filteredTools = tools.filter(tool => 
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedStage || tool.stage === selectedStage)
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
            SaaS Tools
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search tools..."
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
          {filteredTools.map((tool: Tool) => (
            <Grid item key={tool.id} xs={12} sm={6} md={4}>
              <MotionWrapper>
                <Card>
                  <CardActionArea component={Link} href={`/tools/${tool.id}`}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {highlightText(tool.name, searchTerm)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlightText(tool.description, searchTerm)}
                      </Typography>
                      <Chip label={tool.stage} color="primary" size="small" sx={{ mt: 1 }} />
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