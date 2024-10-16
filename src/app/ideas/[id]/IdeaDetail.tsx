'use client';

import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar';
import { Idea } from '../../../types';

interface IdeaDetailProps {
  idea: Idea;
  additionalContent: string | null;
}

export default function IdeaDetail({ idea, additionalContent }: IdeaDetailProps) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {idea.title}
        </Typography>
        <Chip label={idea.stage} color="primary" sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          {idea.description}
        </Typography>
        
        {idea.tools && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Tools to use</Typography>
            <ul>
              {idea.tools.map((tool: string, index: number) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </Box>
        )}

        {additionalContent && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Additional Information</Typography>
            <ReactMarkdown>{additionalContent}</ReactMarkdown>
          </Box>
        )}
      </Container>
    </>
  );
}

