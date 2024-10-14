'use client';

import React from 'react';
import { Container, Typography, Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/Navbar';
import MotionWrapper from '../../components/MotionWrapper';
import JourneyStageCard from '../../components/JourneyStageCard';

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container sx={{ py: 12 }} maxWidth="lg">
          <MotionWrapper>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 3 }}>
              The Founder's Journey
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
              From idea to successful SaaS product, we're here to support you every step of the way.
            </Typography>
          </MotionWrapper>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {journeyStages.map((stage, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MotionWrapper delay={index * 0.1}>
                  <JourneyStageCard {...stage} />
                </MotionWrapper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
              The Importance of a Structured Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Following a structured journey in your SaaS startup is crucial for several reasons:
            </Typography>
            <ul>
              <li>It provides a clear roadmap, helping you focus on the right tasks at the right time.</li>
              <li>It helps you avoid common pitfalls and mistakes that many founders make.</li>
              <li>It allows you to measure your progress and celebrate milestones along the way.</li>
              <li>It gives you a framework for decision-making, ensuring you're always moving in the right direction.</li>
            </ul>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
              Success Stories
            </Typography>
            <Grid container spacing={4}>
              {successStories.map((story, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="h4" gutterBottom>
                        {story.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {story.company}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        "{story.quote}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
              Resources for Each Stage
            </Typography>
            {journeyStages.map((stage, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{stage.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {resources[stage.title.toLowerCase()].map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
              Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <MotionWrapper>
              <Typography variant="h4" component="h3" gutterBottom>
                Ready to start your SaaS journey?
              </Typography>
              <Button variant="contained" color="primary" size="large" href="/journey/ideation" sx={{ mt: 2 }}>
                Begin Your Journey
              </Button>
            </MotionWrapper>
          </Box>
        </Container>
      </main>
    </>
  );
}


const journeyStages = [
    {
      title: 'Ideation',
      description: 'Discover tools and resources for the ideation stage of your SaaS journey.',
      buttonText: 'EXPLORE IDEATION',
      color: '#FFF9C4',
      icon: 'ideation' as const,
    },
    {
      title: 'Validation',
      description: 'Discover tools and resources for the validation stage of your SaaS journey.',
      buttonText: 'EXPLORE VALIDATION',
      color: '#C8E6C9',
      icon: 'validation' as const,
    },
    {
      title: 'Building',
      description: 'Discover tools and resources for the building stage of your SaaS journey.',
      buttonText: 'EXPLORE BUILDING',
      color: '#BBDEFB',
      icon: 'building' as const,
    },
    {
      title: 'Growth',
      description: 'Discover tools and resources for the growth stage of your SaaS journey.',
      buttonText: 'EXPLORE GROWTH',
      color: '#FFE0B2',
      icon: 'growth' as const,
    },
    {
      title: 'Scale',
      description: 'Discover tools and resources for the scale stage of your SaaS journey.',
      buttonText: 'EXPLORE SCALE',
      color: '#E1BEE7',
      icon: 'scale' as const,
    },
  ];
  

const successStories = [
  {
    name: "Jane Doe",
    company: "SaaSSuccess",
    quote: "The structured approach helped me turn my idea into a thriving SaaS business in just 18 months."
  },
  {
    name: "John Smith",
    company: "CloudSolutions",
    quote: "Following this journey helped me avoid costly mistakes and accelerate my growth."
  },
  {
    name: "Emily Brown",
    company: "DataFlow",
    quote: "The resources and community support at each stage were invaluable to my success."
  }
];

const resources = {
  ideation: [
    "Idea Validation Toolkit",
    "Market Research Guide",
    "Competitor Analysis Template"
  ],
  validation: [
    "MVP Development Guide",
    "User Testing Best Practices",
    "Customer Interview Templates"
  ],
  building: [
    "Technology Stack Selection Guide",
    "Agile Development Practices",
    "Product Roadmap Template"
  ],
  growth: [
    "SaaS Marketing Playbook",
    "Customer Acquisition Strategies",
    "Retention Optimization Techniques"
  ],
  scale: [
    "Team Scaling Guide",
    "Operational Efficiency Handbook",
    "Funding and Investment Strategies"
  ]
};

const faqs = [
  {
    question: "How long does it typically take to go from idea to launch?",
    answer: "The timeline can vary greatly depending on the complexity of your SaaS product and your resources. However, many founders aim to launch an MVP within 3-6 months of starting the ideation phase."
  },
  {
    question: "Do I need to follow all stages in order?",
    answer: "While the stages are designed to be followed in order, your journey may not always be linear. You might find yourself revisiting earlier stages as you learn and iterate on your product."
  },
  {
    question: "How much funding do I need to start a SaaS business?",
    answer: "The amount of funding needed can vary widely. Many SaaS businesses start with bootstrap funding (self-funding) and seek external investment as they grow. It's possible to start with as little as a few thousand dollars if you have the necessary skills to build the product yourself."
  },
  {
    question: "What if my idea doesn't fit the traditional SaaS model?",
    answer: "The principles and stages outlined in this journey can be adapted to various types of software businesses. The key is to focus on validating your idea, building a solid product, and growing your customer base."
  }
];
