'use client';

import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import IdeaDetail from './IdeaDetail';

export default async function IdeaPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // Create a Supabase client
  const supabase = createServerComponentClient({ cookies });

  // Fetch idea from database
  const { data: idea, error } = await supabase
    .from('ideas')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching idea:', error);
    return <div>Error loading idea</div>;
  }

  // Fetch additional content from API route
  const res = await fetch(`/api/ideas/${id}`);
  const { content: additionalContent } = await res.json();

  if (!idea) {
    return <div>Idea not found</div>;
  }

  return <IdeaDetail idea={idea} additionalContent={additionalContent} />;
}
