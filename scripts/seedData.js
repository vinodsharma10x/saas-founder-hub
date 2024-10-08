const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const founders = [
  {
    name: "Tobi Lütke",
    bio: "Co-founder and CEO of Shopify",
    linkedin_url: "https://www.linkedin.com/in/tobias-lutke-shopify/",
    twitter_handle: "tobi",
  },
  {
    name: "Stewart Butterfield",
    bio: "Co-founder of Slack and Flickr",
    linkedin_url: "https://www.linkedin.com/in/stewart-butterfield/",
    twitter_handle: "stewart",
  },
  // Add more founders...
];

const products = [
  {
    name: "Shopify",
    description: "E-commerce platform for online stores and retail point-of-sale systems",
    website: "https://www.shopify.com",
    category: "E-commerce",
    founding_year: 2006,
  },
  {
    name: "Slack",
    description: "Business communication platform offering many IRC-style features",
    website: "https://slack.com",
    category: "Communication",
    founding_year: 2013,
  },
  // Add more products...
];

const ideas = [
  {
    title: "AI-Powered Content Curator",
    description: "A SaaS tool that uses AI to curate and suggest relevant content for social media managers and content creators",
    problem_statement: "Content creators struggle to consistently find and share relevant, engaging content",
    target_audience: "Social media managers, content creators, digital marketers",
    potential_revenue_streams: ["Subscription model", "API access for enterprise clients"],
  },
  {
    title: "Virtual Event Platform for Professional Networking",
    description: "A platform designed to facilitate meaningful professional connections at virtual events and conferences",
    problem_statement: "Networking at virtual events is often ineffective and unsatisfying compared to in-person events",
    target_audience: "Event organizers, professional associations, business professionals",
    potential_revenue_streams: ["Event hosting fees", "Premium features for attendees", "Sponsored networking sessions"],
  },
  // Add more ideas...
];

const foundersAndProducts = [
  // ... (keep the existing entries) ...

  // Adding more entries to reach 20:
  {
    founder: {
      name: "Suhail Doshi",
      bio: "Co-founder and former CEO of Mixpanel",
      linkedin_url: "https://www.linkedin.com/in/suhail/",
      twitter_handle: "suhail",
    },
    product: {
      name: "Mixpanel",
      description: "User behavior analytics platform",
      website: "https://mixpanel.com",
      category: "Analytics",
      founding_year: 2009,
    }
  },
  {
    founder: {
      name: "Vlad Tenev",
      bio: "Co-founder and CEO of Robinhood",
      linkedin_url: "https://www.linkedin.com/in/vladtenev/",
      twitter_handle: "vladtenev",
    },
    product: {
      name: "Robinhood",
      description: "Commission-free stock trading and investing app",
      website: "https://robinhood.com",
      category: "FinTech",
      founding_year: 2013,
    }
  },
  {
    founder: {
      name: "Katrina Lake",
      bio: "Founder and former CEO of Stitch Fix",
      linkedin_url: "https://www.linkedin.com/in/katrina-lake-8b713a1/",
      twitter_handle: "kmlake",
    },
    product: {
      name: "Stitch Fix",
      description: "Online personal styling service",
      website: "https://www.stitchfix.com",
      category: "E-commerce",
      founding_year: 2011,
    }
  },
  {
    founder: {
      name: "Patrick Collison",
      bio: "Co-founder and CEO of Stripe",
      linkedin_url: "https://www.linkedin.com/in/patrickc42/",
      twitter_handle: "patrickc",
    },
    product: {
      name: "Stripe",
      description: "Online payment processing platform",
      website: "https://stripe.com",
      category: "FinTech",
      founding_year: 2010,
    }
  },
  {
    founder: {
      name: "Melanie Perkins",
      bio: "Co-founder and CEO of Canva",
      linkedin_url: "https://www.linkedin.com/in/melanieperkins/",
      twitter_handle: "melaniecanva",
    },
    product: {
      name: "Canva",
      description: "Graphic design platform",
      website: "https://www.canva.com",
      category: "Design",
      founding_year: 2012,
    }
  }
];

async function seedData() {
  for (const item of foundersAndProducts) {
    // Check if founder exists
    let { data: existingFounder, error: founderCheckError } = await supabase
      .from('founders')
      .select('id')
      .eq('name', item.founder.name)
      .single();

    if (founderCheckError && founderCheckError.code !== 'PGRST116') {
      console.error("Error checking founder:", founderCheckError);
      continue;
    }

    let founderId;
    if (!existingFounder) {
      // Insert founder if not exists
      const { data: newFounder, error: founderError } = await supabase
        .from('founders')
        .insert([item.founder])
        .select();
      
      if (founderError) {
        console.error("Error inserting founder:", founderError);
        continue;
      }
      founderId = newFounder[0].id;
      console.log(`Added new founder: ${item.founder.name}`);
    } else {
      founderId = existingFounder.id;
      console.log(`Founder already exists: ${item.founder.name}`);
    }

    // Check if product exists
    let { data: existingProduct, error: productCheckError } = await supabase
      .from('saas_products')
      .select('id')
      .eq('name', item.product.name)
      .single();

    if (productCheckError && productCheckError.code !== 'PGRST116') {
      console.error("Error checking product:", productCheckError);
      continue;
    }

    let productId;
    if (!existingProduct) {
      // Insert product if not exists
      const { data: newProduct, error: productError } = await supabase
        .from('saas_products')
        .insert([item.product])
        .select();
      
      if (productError) {
        console.error("Error inserting product:", productError);
        continue;
      }
      productId = newProduct[0].id;
      console.log(`Added new product: ${item.product.name}`);
    } else {
      productId = existingProduct.id;
      console.log(`Product already exists: ${item.product.name}`);
    }

    // Check if founder and product are already linked
    let { data: existingLink, error: linkCheckError } = await supabase
      .from('founder_product')
      .select('id')
      .eq('founder_id', founderId)
      .eq('product_id', productId)
      .single();

    if (linkCheckError && linkCheckError.code !== 'PGRST116') {
      console.error("Error checking founder-product link:", linkCheckError);
      continue;
    }

    if (!existingLink) {
      // Link founder and product if not already linked
      const { error: linkError } = await supabase
        .from('founder_product')
        .insert([{
          founder_id: founderId,
          product_id: productId,
          role: 'Founder & CEO'
        }]);
      
      if (linkError) {
        console.error("Error linking founder and product:", linkError);
      } else {
        console.log(`Linked ${item.founder.name} and ${item.product.name}`);
      }
    } else {
      console.log(`${item.founder.name} and ${item.product.name} are already linked`);
    }
  }
}

seedData();
