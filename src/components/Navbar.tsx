import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            onClick={handleClick}
            sx={{ my: 1, mx: 1.5 }}
          >
            Founder's Journey
          </Button>
          <Menu
            id="journey-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} href="/journey/ideation">Ideation</MenuItem>
            <MenuItem onClick={handleClose} component={Link} href="/journey/validation">Validation</MenuItem>
            <MenuItem onClick={handleClose} component={Link} href="/journey/building">Building</MenuItem>
            <MenuItem onClick={handleClose} component={Link} href="/journey/growth">Growth</MenuItem>
            <MenuItem onClick={handleClose} component={Link} href="/journey/scale">Scale</MenuItem>
          </Menu>
          <Button component={Link} href="/ideas" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Ideas
          </Button>
          <Button component={Link} href="/tools" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Tools
          </Button>
          <Button component={Link} href="/success-stories" variant="text" sx={{ my: 1, mx: 1.5 }}>
            Success Stories
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
