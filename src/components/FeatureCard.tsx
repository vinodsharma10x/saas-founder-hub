import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, linkText, linkHref }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" color="text.primary">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={linkHref} passHref>
            <Button size="small" color="primary">
              {linkText}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
