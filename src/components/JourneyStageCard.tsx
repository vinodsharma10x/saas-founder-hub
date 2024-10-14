import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { LightbulbOutlined, CheckCircleOutline, BusinessCenterOutlined, TrendingUpOutlined, BalanceOutlined } from '@mui/icons-material';
import Link from 'next/link';

interface JourneyStageCardProps {
  title: string;
  description: string;
  buttonText: string;
  color: string;
  icon: 'ideation' | 'validation' | 'building' | 'growth' | 'scale';
}

const JourneyStageCard: React.FC<JourneyStageCardProps> = ({ title, description, buttonText, color, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'ideation': return <LightbulbOutlined />;
      case 'validation': return <CheckCircleOutline />;
      case 'building': return <BusinessCenterOutlined />;
      case 'growth': return <TrendingUpOutlined />;
      case 'scale': return <BalanceOutlined />;
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: color }}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          {getIcon()}
        </Box>
        <Typography gutterBottom variant="h5" component="h2" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }} color="text.primary">
          {description}
        </Typography>
        <Link href={`/journey/${title.toLowerCase()}`} passHref>
          <Button variant="contained" sx={{ alignSelf: 'flex-start', bgcolor: 'background.paper', color: 'text.primary' }}>
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default JourneyStageCard;
