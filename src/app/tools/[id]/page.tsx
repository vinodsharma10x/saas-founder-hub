'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Chip, 
  Link as MuiLink, 
  CircularProgress 
} from '@mui/material';
import Link from 'next/link';
import { Tool } from '../../../types';
import Navbar from '../../../components/Navbar';

export default function ToolDetailPage() {
  const { id } = useParams();
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTool() {
      try {
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setTool(data);
      } catch (err) {
        console.error('Error fetching tool:', err);
        setError('Failed to load tool details');
      } finally {
        setLoading(false);
      }
    }

    fetchTool();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : !tool ? (
          <Typography>Tool not found</Typography>
        ) : (
          <>
            <Button component={Link} href="/tools" sx={{ mb: 2 }}>
              Back to Tools
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {tool.logo_url && (
                <img src={tool.logo_url} alt={`${tool.name} logo`} style={{ width: 50, height: 50, marginRight: 16 }} />
              )}
              <Typography variant="h3" component="h1">
                {tool.name}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {tool.description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {tool.category && <Chip label={tool.category} color="primary" sx={{ mr: 1 }} />}
              {tool.pricing_model && <Chip label={tool.pricing_model} color="secondary" />}
            </Box>
            {tool.features && tool.features.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom>Features:</Typography>
                <ul>
                  {tool.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            {tool.founded_year && tool.company_size && (
              <Typography variant="body2" paragraph>
                Founded in {tool.founded_year} • Company size: {tool.company_size}
              </Typography>
            )}
            {tool.website && (
              <MuiLink href={tool.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </MuiLink>
            )}
          </>
        )}
      </Container>
    </>
  );
}