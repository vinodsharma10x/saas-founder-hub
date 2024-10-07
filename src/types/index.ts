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
