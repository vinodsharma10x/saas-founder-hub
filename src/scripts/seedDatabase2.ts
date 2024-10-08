import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Environment variables are not set correctly.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function seedDatabase() {
  // Seed Tools
  const tools = [
    { name: 'Slack', description: 'Team communication and collaboration platform', category: 'Communication', pricing_model: 'Freemium' },
    { name: 'Trello', description: 'Visual collaboration tool for project management', category: 'Project Management', pricing_model: 'Freemium' },
    { name: 'GitHub', description: 'Version control and collaboration platform for developers', category: 'Development', pricing_model: 'Freemium' },
    { name: 'Figma', description: 'Collaborative interface design tool', category: 'Design', pricing_model: 'Freemium' },
    { name: 'Mailchimp', description: 'Email marketing and automation platform', category: 'Marketing', pricing_model: 'Freemium' },
  ];

  const { data: toolsData, error: toolsError } = await supabase.from('tools').insert(tools).select();
  if (toolsError) {
    console.error('Error inserting tools:', toolsError);
    return;
  }
  console.log('Tools inserted successfully');

  // Seed Ideas
  const ideas = [
    { title: 'AI-powered personal finance advisor', description: 'An app that uses AI to provide personalized financial advice', problem_statement: 'Many people struggle with managing their finances effectively' },
    { title: 'Virtual reality fitness classes', description: 'Immersive fitness classes in virtual reality', problem_statement: 'People find it hard to stay motivated with traditional home workouts' },
    { title: 'Sustainable food delivery platform', description: 'A food delivery service focused on sustainable and eco-friendly practices', problem_statement: 'Current food delivery services generate a lot of waste' },
    { title: 'Peer-to-peer skill sharing marketplace', description: 'A platform where people can teach and learn various skills from each other', problem_statement: 'Traditional education can be expensive and inflexible' },
    { title: 'Smart home energy management system', description: 'An IoT system that optimizes home energy usage', problem_statement: 'Many households waste energy due to inefficient management' },
  ];

  const { data: ideasData, error: ideasError } = await supabase.from('ideas').insert(ideas).select();
  if (ideasError) {
    console.error('Error inserting ideas:', ideasError);
    return;
  }
  console.log('Ideas inserted successfully');

  // Seed Founders
  const founders = [
    { name: 'John Doe', bio: 'Serial entrepreneur with a passion for SaaS', linkedin_url: 'https://www.linkedin.com/in/johndoe', twitter_handle: 'johndoe' },
    { name: 'Jane Smith', bio: 'Tech innovator and AI enthusiast', linkedin_url: 'https://www.linkedin.com/in/janesmith', twitter_handle: 'janesmith' },
    { name: 'Mike Johnson', bio: 'Product guru with 15 years of experience', linkedin_url: 'https://www.linkedin.com/in/mikejohnson', twitter_handle: 'mikejohnson' },
    { name: 'Sarah Williams', bio: 'UX designer turned SaaS founder', linkedin_url: 'https://www.linkedin.com/in/sarahwilliams', twitter_handle: 'sarahwilliams' },
    { name: 'David Brown', bio: 'B2B SaaS expert and growth hacker', linkedin_url: 'https://www.linkedin.com/in/davidbrown', twitter_handle: 'davidbrown' },
  ];

  const { data: foundersData, error: foundersError } = await supabase.from('founders').insert(founders).select();
  if (foundersError) {
    console.error('Error inserting founders:', foundersError);
    return;
  }
  console.log('Founders inserted successfully');

  // Seed SaaS Products
  const products = [
    { name: 'TaskMaster', description: 'All-in-one project management solution', website: 'https://taskmaster.com', category: 'Productivity', founding_year: 2018 },
    { name: 'DataViz Pro', description: 'Advanced data visualization platform', website: 'https://datavizpro.com', category: 'Business Intelligence', founding_year: 2019 },
    { name: 'SecureChat', description: 'End-to-end encrypted messaging for businesses', website: 'https://securechat.com', category: 'Communication', founding_year: 2020 },
    { name: 'AI Writer', description: 'AI-powered content creation assistant', website: 'https://aiwriter.com', category: 'Artificial Intelligence', founding_year: 2021 },
    { name: 'CloudAccounts', description: 'Cloud-based accounting software for SMEs', website: 'https://cloudaccounts.com', category: 'Finance', founding_year: 2017 },
  ];

  const { data: productsData, error: productsError } = await supabase.from('saas_products').insert(products).select();
  if (productsError) {
    console.error('Error inserting products:', productsError);
    return;
  }
  console.log('Products inserted successfully');

  // Link founders to products
  const founderProducts = [
    { founder_id: foundersData![0].id, product_id: productsData![0].id, role: 'Founder' },
    { founder_id: foundersData![1].id, product_id: productsData![1].id, role: 'Co-founder' },
    { founder_id: foundersData![2].id, product_id: productsData![1].id, role: 'Co-founder' },
    { founder_id: foundersData![3].id, product_id: productsData![2].id, role: 'Founder' },
    { founder_id: foundersData![4].id, product_id: productsData![3].id, role: 'Founder' },
    { founder_id: foundersData![0].id, product_id: productsData![4].id, role: 'Co-founder' },
    { founder_id: foundersData![2].id, product_id: productsData![4].id, role: 'Co-founder' },
  ];

  const { error: founderProductsError } = await supabase.from('founder_product').insert(founderProducts);
  if (founderProductsError) {
    console.error('Error linking founders to products:', founderProductsError);
    return;
  }
  console.log('Founders linked to products successfully');

  // Link founders to tools
  const founderTools = [
    { founder_id: foundersData![0].id, tool_id: toolsData![0].id },
    { founder_id: foundersData![0].id, tool_id: toolsData![2].id },
    { founder_id: foundersData![1].id, tool_id: toolsData![1].id },
    { founder_id: foundersData![1].id, tool_id: toolsData![3].id },
    { founder_id: foundersData![2].id, tool_id: toolsData![0].id },
    { founder_id: foundersData![2].id, tool_id: toolsData![4].id },
    { founder_id: foundersData![3].id, tool_id: toolsData![1].id },
    { founder_id: foundersData![3].id, tool_id: toolsData![2].id },
    { founder_id: foundersData![4].id, tool_id: toolsData![3].id },
    { founder_id: foundersData![4].id, tool_id: toolsData![4].id },
  ];

  const { error: founderToolsError } = await supabase.from('founder_tool').insert(founderTools);
  if (founderToolsError) {
    console.error('Error linking founders to tools:', founderToolsError);
    return;
  }
  console.log('Founders linked to tools successfully');

  // Link products to tools
  const productTools = [
    { product_id: productsData![0].id, tool_id: toolsData![0].id },
    { product_id: productsData![0].id, tool_id: toolsData![2].id },
    { product_id: productsData![1].id, tool_id: toolsData![1].id },
    { product_id: productsData![1].id, tool_id: toolsData![3].id },
    { product_id: productsData![2].id, tool_id: toolsData![0].id },
    { product_id: productsData![2].id, tool_id: toolsData![4].id },
    { product_id: productsData![3].id, tool_id: toolsData![1].id },
    { product_id: productsData![3].id, tool_id: toolsData![2].id },
    { product_id: productsData![4].id, tool_id: toolsData![3].id },
    { product_id: productsData![4].id, tool_id: toolsData![4].id },
  ];

  const { error: productToolsError } = await supabase.from('product_tool').insert(productTools);
  if (productToolsError) {
    console.error('Error linking products to tools:', productToolsError);
    return;
  }
  console.log('Products linked to tools successfully');

  console.log('Database seeded successfully!');
}

seedDatabase().catch(console.error);