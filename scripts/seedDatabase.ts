import { createClient } from '@supabase/supabase-js'
import { Tool, Idea } from '../src/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const seedTools = async () => {
  const tools = [
    {
      name: 'Stripe',
      description: 'Payment processing for internet businesses',
      website: 'https://stripe.com',
      category: 'Payments',
      pricing_model: 'Pay-per-use',
      features: ['Online payments', 'Invoicing', 'Subscription management'],
      founded_year: 2010,
      company_size: '1000+',
      logo_url: 'https://stripe.com/img/v3/home/twitter.png'
    },
    {
      name: 'Mailchimp',
      description: 'All-in-one marketing platform',
      website: 'https://mailchimp.com',
      category: 'Marketing',
      pricing_model: 'Freemium',
      features: ['Email marketing', 'Automation', 'CRM'],
      founded_year: 2001,
      company_size: '500-1000',
      logo_url: 'https://mailchimp.com/release/plums/cxp/images/mailchimp-logo-default-png-transparent.png'
    },
    // Add more tools as needed
  ];

  const { data, error } = await supabase.from('tools').insert(tools);
  if (error) console.error('Error inserting tools:', error);
  else console.log('Tools inserted successfully:', data);
};

const seedIdeas = async () => {
  const ideas = [
    {
      title: 'AI-powered content writer',
      description: 'An AI tool that generates high-quality blog posts and articles',
      author: 'John Doe',
      problem_statement: 'Content creation is time-consuming and expensive for businesses',
      target_audience: 'Small to medium-sized businesses, content marketers',
      potential_revenue_streams: ['Subscription model', 'Pay-per-use'],
      required_resources: 'AI expertise, NLP models, cloud infrastructure',
      challenges: 'Ensuring high-quality output, differentiating from competitors'
    },
    {
      title: 'Virtual networking platform',
      description: 'A platform for professionals to network virtually, simulating real-life networking events',
      author: 'Jane Smith',
      problem_statement: 'Difficulty in networking and making professional connections in remote work environments',
      target_audience: 'Professionals, job seekers, entrepreneurs',
      potential_revenue_streams: ['Freemium model', 'Premium features', 'Event hosting fees'],
      required_resources: 'Video conferencing technology, AI for matchmaking, user-friendly interface design',
      challenges: 'Creating engaging virtual environments, ensuring user privacy and security'
    },
    // Add more ideas as needed
  ];

  const { data, error } = await supabase.from('ideas').insert(ideas);
  if (error) console.error('Error inserting ideas:', error);
  else console.log('Ideas inserted successfully:', data);
};

const seedDatabase = async () => {
  await seedTools();
  await seedIdeas();
  console.log('Database seeding completed');
};

seedDatabase();
