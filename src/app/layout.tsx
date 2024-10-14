'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as CustomThemeProvider, useTheme } from '../context/ThemeContext';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </CustomThemeProvider>
      </body>
    </html>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
