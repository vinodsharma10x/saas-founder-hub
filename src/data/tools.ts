import { Tool } from '../types/Tool';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Stripe',
    description: 'Payment processing for internet businesses',
    category: 'Payments',
    website: 'https://stripe.com',
    features: ['Online payments', 'Invoicing', 'Subscription management'],
    pricing: 'Starting from 2.9% + $0.30 per successful card charge',
    rating: 4.8,
    reviewCount: 1200
  },
  {
    id: '2',
    name: 'AWS',
    description: 'On-demand cloud computing platforms and APIs',
    category: 'Cloud Services',
    website: 'https://aws.amazon.com',
    features: ['Compute', 'Storage', 'Database', 'Machine Learning'],
    pricing: 'Pay-as-you-go, starting from $0',
    rating: 4.5,
    reviewCount: 3000
  },
  {
    id: '3',
    name: 'Mailchimp',
    description: 'All-in-one marketing platform for small businesses',
    category: 'Marketing',
    website: 'https://mailchimp.com',
    features: ['Email marketing', 'Automation', 'CRM', 'Landing pages'],
    pricing: 'Free up to 2,000 contacts, then starting at $9.99/month',
    rating: 4.3,
    reviewCount: 2500
  },
  {
    id: '4',
    name: 'Slack',
    description: 'Business communication platform',
    category: 'Communication',
    website: 'https://slack.com',
    features: ['Channels', 'Direct messaging', 'Voice and video calls', 'File sharing'],
    pricing: 'Free plan available, Pro plan starts at $6.67 per user/month',
    rating: 4.5,
    reviewCount: 4000
  },
  {
    id: '5',
    name: 'Trello',
    description: 'Web-based, Kanban-style list-making application',
    category: 'Project Management',
    website: 'https://trello.com',
    features: ['Boards', 'Lists', 'Cards', 'Team collaboration'],
    pricing: 'Free plan available, Business Class starts at $10 per user/month',
    rating: 4.4,
    reviewCount: 3500
  },
  {
    id: '6',
    name: 'Shopify',
    description: 'E-commerce platform for online stores and retail point-of-sale systems',
    category: 'E-commerce',
    website: 'https://www.shopify.com',
    features: ['Online store', 'Point of sale', 'Marketing tools', 'Analytics'],
    pricing: 'Starting at $29/month',
    rating: 4.6,
    reviewCount: 5000
  },
  {
    id: '7',
    name: 'HubSpot',
    description: 'Inbound marketing, sales, and CRM software',
    category: 'CRM',
    website: 'https://www.hubspot.com',
    features: ['CRM', 'Marketing automation', 'Sales tools', 'Customer service'],
    pricing: 'Free tools available, Starter plan begins at $45/month',
    rating: 4.4,
    reviewCount: 3800
  },
  {
    id: '8',
    name: 'Asana',
    description: 'Web and mobile application designed to help teams organize, track, and manage their work',
    category: 'Project Management',
    website: 'https://asana.com',
    features: ['Task management', 'Project timelines', 'Team collaboration', 'Reporting'],
    pricing: 'Free for up to 15 team members, Premium at $10.99 per user/month',
    rating: 4.3,
    reviewCount: 3200
  },
  {
    id: '9',
    name: 'Zendesk',
    description: 'Customer service software and support ticket system',
    category: 'Customer Support',
    website: 'https://www.zendesk.com',
    features: ['Ticketing system', 'Live chat', 'Knowledge base', 'Analytics'],
    pricing: 'Starting at $19 per agent/month',
    rating: 4.2,
    reviewCount: 2800
  },
  {
    id: '10',
    name: 'Dropbox',
    description: 'File hosting service that offers cloud storage, file synchronization, personal cloud, and client software',
    category: 'Cloud Storage',
    website: 'https://www.dropbox.com',
    features: ['File storage', 'File sharing', 'Collaboration tools', 'Backup'],
    pricing: 'Free plan up to 2GB, Plus plan at $9.99/month for 2TB',
    rating: 4.5,
    reviewCount: 4500
  }
];
