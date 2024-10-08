import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={4} sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SaaS Founder Hub
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/tools">
          Tools
        </Button>
        <Button color="inherit" component={Link} href="/ideas">
          Ideas
        </Button>
        <Button color="inherit" component={Link} href="/founders">
          Founders
        </Button>
        <Button color="inherit" component={Link} href="/products">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
}
