'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  Link as MuiLink,
  CircularProgress,
  CardActionArea
} from '@mui/material';
import Link from 'next/link';
import { SaasProduct, Founder, Tool } from '../../../../types';
import Navbar from '../../../../components/Navbar';
import MotionWrapper from '../../../../components/MotionWrapper';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<SaasProduct | null>(null);
  const [founders, setFounders] = useState<Founder[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const { data: productData, error: productError } = await supabase
          .from('saas_products')
          .select('*')
          .eq('id', id)
          .single();

        if (productError) throw productError;
        setProduct(productData);

        const { data: foundersData, error: foundersError } = await supabase
          .from('founder_product')
          .select('founders(*)')
          .eq('product_id', id);

        if (foundersError) throw foundersError;
        setFounders(foundersData.map(item => item.founders));

        const { data: toolsData, error: toolsError } = await supabase
          .from('product_tool')
          .select('tools(*)')
          .eq('product_id', id);

        if (toolsError) throw toolsError;
        setTools(toolsData.map(item => item.tools));

      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!product) return <Typography>Product not found</Typography>;

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <MotionWrapper>
          
          <Typography variant="h3" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          {product.website && (
            <MuiLink href={product.website} target="_blank" rel="noopener noreferrer" sx={{ mb: 2, display: 'block' }}>
              Visit Website
            </MuiLink>
          )}
          <Typography variant="body2" sx={{ mb: 2 }}>
            Founded in: {product.founding_year || 'N/A'}
          </Typography>
          
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Founders
          </Typography>
          <Grid container spacing={2}>
            {founders.map((founder) => (
              <Grid item key={founder.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardActionArea component={Link} href={`/success-stories/founders/${founder.id}`}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {founder.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {founder.bio}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Timeline
          </Typography>
          <Timeline>
            {product.timeline?.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {event.year}
                  </Typography>
                  <Typography>{event.event}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Success Metrics
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(product.success_metrics || {}).map(([key, value]) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {key.replace(/_/g, ' ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value}
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
