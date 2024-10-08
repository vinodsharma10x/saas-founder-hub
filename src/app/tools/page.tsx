'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
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
import { Tool, ToolCategory } from '../../types';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<{[key: number]: ToolCategory & {tools: Tool[]}}>({});
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    async function fetchToolsAndCategories() {
      const { data: toolsData, error: toolsError } = await supabase
        .from('tools')
        .select('*, tool_categories(id, name)');
    
      if (toolsError) console.error('Error fetching tools:', toolsError);
      else {
        setTools(toolsData || []);
        
        const categoryMap = toolsData.reduce((acc, tool) => {
          if (tool.tool_categories) {
            const categoryId = tool.tool_categories.id;
            if (!acc[categoryId]) {
              acc[categoryId] = { ...tool.tool_categories, tools: [] };
            }
            acc[categoryId].tools.push(tool);
          }
          return acc;
        }, {} as {[key: number]: ToolCategory & {tools: Tool[]}});

        setCategories(categoryMap);
      }
    }

    fetchToolsAndCategories();
  }, []);

  const filteredTools = tools.filter(tool => 
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.includes(tool.category_id))
  );

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
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
            SaaS Tools
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            {Object.values(categories).map(category => (
              <Chip
                key={category.id}
                label={category.name}
                onClick={() => setSelectedCategories(prev => 
                  prev.includes(category.id) ? prev.filter(c => c !== category.id) : [...prev, category.id]
                )}
                color={selectedCategories.includes(category.id) ? "primary" : "default"}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </MotionWrapper>
        {Object.entries(categories).map(([categoryId, category]) => (
          <Box key={categoryId} sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {category.name}
            </Typography>
            <Grid container spacing={3}>
              {category.tools
                .filter(tool => 
                  tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tool.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((tool: Tool) => (
                  <Grid item key={tool.id} xs={12} sm={6} md={4}>
                    <MotionWrapper>
                      <Card>
                        <CardActionArea component={Link} href={`/tools/${tool.id}`}>
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {highlightText(tool.name, searchTerm)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {highlightText(tool.description, searchTerm)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </MotionWrapper>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
}
