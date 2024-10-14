'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
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
import { SaasProduct } from '../../../types';
import Navbar from '../../../components/Navbar';
import MotionWrapper from '../../../components/MotionWrapper';

export default function ProductsPage() {
  const [products, setProducts] = useState<SaasProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('saas_products')
        .select('*');
      
      if (error) console.error('Error fetching products:', error);
      else {
        setProducts(data || []);
        const uniqueCategories = [...new Set(data?.map(product => product.category).filter(Boolean))];
        setCategories(uniqueCategories as string[]);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategories.length === 0 || (product.category && selectedCategories.includes(product.category)))
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
            SaaS Products
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            {categories.map(category => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategories(prev => 
                  prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                )}
                color={selectedCategories.includes(category) ? "primary" : "default"}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </MotionWrapper>
        <Grid container spacing={3}>
          {filteredProducts.map((product: SaasProduct, index: number) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <MotionWrapper delay={index * 0.1}>
                <Card>
                  <CardActionArea component={Link} href={`/success-stories/products/${product.id}`}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {highlightText(product.name, searchTerm)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlightText(product.description || '', searchTerm)}
                      </Typography>
                      {product.category && (
                        <Chip label={product.category} size="small" sx={{ mt: 1 }} />
                      )}
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
