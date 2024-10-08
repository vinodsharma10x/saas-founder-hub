'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  Link as MuiLink,
  CircularProgress
} from '@mui/material';
import Link from 'next/link';
import { Founder, SaasProduct, Tool } from '../../../types';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';

export default function FounderDetailPage() {
  const { id } = useParams();
  const [founder, setFounder] = useState<Founder | null>(null);
  const [products, setProducts] = useState<SaasProduct[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFounderDetails() {
      try {
        const { data: founderData, error: founderError } = await supabase
          .from('founders')
          .select('*')
          .eq('id', id)
          .single();

        if (founderError) throw founderError;
        setFounder(founderData);

        const { data: productsData, error: productsError } = await supabase
          .from('founder_product')
          .select('saas_products(*)')
          .eq('founder_id', id);

        if (productsError) throw productsError;
        setProducts(productsData.map(item => item.saas_products));

        const { data: toolsData, error: toolsError } = await supabase
          .from('founder_tool')
          .select('tools(*)')
          .eq('founder_id', id);

        if (toolsError) throw toolsError;
        setTools(toolsData.map(item => item.tools));

      } catch (err) {
        console.error('Error fetching founder details:', err);
        setError('Failed to load founder details');
      } finally {
        setLoading(false);
      }
    }

    fetchFounderDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!founder) return <Typography>Founder not found</Typography>;

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          <Button component={Link} href="/founders" sx={{ mb: 2 }}>
            Back to Founders
          </Button>
          <Typography variant="h3" component="h1" gutterBottom>
            {founder.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {founder.bio}
          </Typography>
          {founder.linkedin_url && (
            <MuiLink href={founder.linkedin_url} target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
              LinkedIn
            </MuiLink>
          )}
          {founder.twitter_handle && (
            <MuiLink href={`https://twitter.com/${founder.twitter_handle}`} target="_blank" rel="noopener noreferrer">
              Twitter
            </MuiLink>
          )}
          
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Products
          </Typography>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Tools Used
          </Typography>
          <Grid container spacing={2}>
            {tools.map((tool) => (
              <Grid item key={tool.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
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
