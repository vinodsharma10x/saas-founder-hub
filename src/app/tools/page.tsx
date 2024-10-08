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
import { Tool } from '../../types';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);

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

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            SaaS Tools
          </Typography>
        </MotionWrapper>
        <Grid container spacing={3}>
          {tools.map((tool: Tool, index: number) => (
            <Grid item key={tool.id} xs={12} sm={6} md={4}>
              <MotionWrapper delay={index * 0.1}>
                <Card>
                  <CardActionArea component={Link} href={`/tools/${tool.id}`}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {tool.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {tool.description}
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
