import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 16,
        pb: 12,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            SaaS Founder Hub
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            paragraph
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Your ultimate resource for building and growing successful SaaS businesses. 
            Whether you're just starting out or looking to scale, we've got you covered.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>
      {/* Optional: Add a decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(45deg, rgba(108,99,255,0.1) 0%, rgba(255,101,132,0.1) 100%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default HeroSection;
