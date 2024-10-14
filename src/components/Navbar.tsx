import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';  // Update this import
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [journeyAnchorEl, setJourneyAnchorEl] = useState<null | HTMLElement>(null);
  const [storiesAnchorEl, setStoriesAnchorEl] = useState<null | HTMLElement>(null);
  const { theme } = useTheme();  // Use the custom useTheme hook

  const handleJourneyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setJourneyAnchorEl(event.currentTarget);
  };

  const handleStoriesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStoriesAnchorEl(event.currentTarget);
  };

  const handleJourneyClose = () => {
    setJourneyAnchorEl(null);
  };

  const handleStoriesClose = () => {
    setStoriesAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          SaaS Founder Hub
        </Typography>
        <nav>
          <Button component={Link} href="/" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Home
          </Button>
          <Button
            aria-controls="journey-menu"
            aria-haspopup="true"
            onClick={handleJourneyClick}
            sx={{ my: 1, mx: 1.5 }}
          >
            Founder's Journey
          </Button>
          <Menu
            id="journey-menu"
            anchorEl={journeyAnchorEl}
            keepMounted
            open={Boolean(journeyAnchorEl)}
            onClose={handleJourneyClose}
          >
            <MenuItem onClick={handleJourneyClose} component={Link} href="/journey/ideation">Ideation</MenuItem>
            <MenuItem onClick={handleJourneyClose} component={Link} href="/journey/validation">Validation</MenuItem>
            <MenuItem onClick={handleJourneyClose} component={Link} href="/journey/building">Building</MenuItem>
            <MenuItem onClick={handleJourneyClose} component={Link} href="/journey/growth">Growth</MenuItem>
            <MenuItem onClick={handleJourneyClose} component={Link} href="/journey/scale">Scale</MenuItem>
          </Menu>
          <Button component={Link} href="/ideas" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Ideas
          </Button>
          <Button component={Link} href="/tools" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Tools
          </Button>
          <Button
            aria-controls="success-stories-menu"
            aria-haspopup="true"
            onClick={handleStoriesClick}
            sx={{ my: 1, mx: 1.5 }}
          >
            Success Stories
          </Button>
          <Menu
            id="success-stories-menu"
            anchorEl={storiesAnchorEl}
            keepMounted
            open={Boolean(storiesAnchorEl)}
            onClose={handleStoriesClose}
          >
            <MenuItem onClick={handleStoriesClose} component={Link} href="/success-stories">All Stories</MenuItem>
            <MenuItem onClick={handleStoriesClose} component={Link} href="/success-stories/products">Products</MenuItem>
            <MenuItem onClick={handleStoriesClose} component={Link} href="/success-stories/founders">Founders</MenuItem>
          </Menu>
        </nav>
        <Box sx={{ ml: 2 }}>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
