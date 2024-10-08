export type Tool = {
  id: number;
  name: string;
  description: string;
  website: string;
  category: string;
  pricing_model: string;
  features: string[];
  founded_year: number;
  company_size: string;
  logo_url: string;
  category_id: number | null;
};

export type Idea = {
  id: number;
  title: string;
  description: string;
  author: string;
  problem_statement: string;
  target_audience: string;
  potential_revenue_streams: string[];
  required_resources: string;
  challenges: string;
  created_at: string;
};

export type Founder = {
  id: number;
  name: string;
  bio: string | null;
  linkedin_url: string | null;
  twitter_handle: string | null;
  created_at: string;
  key_lessons: string[] | null;
  pivotal_moments: { year: number; event: string }[] | null;
};

export type SaasProduct = {
  id: number;
  name: string;
  description: string | null;
  website: string | null;
  category: string | null;
  founding_year: number | null;
  created_at: string;
  timeline: { year: number; event: string }[] | null;
  success_metrics: { [key: string]: string } | null;
};

export type FounderProduct = {
  founder_id: number;
  product_id: number;
  role: string | null;
};

export type FounderTool = {
  founder_id: number;
  tool_id: number;
};

export type ProductTool = {
  product_id: number;
  tool_id: number;
};
