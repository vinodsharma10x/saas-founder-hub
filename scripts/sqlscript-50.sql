-- Insert Founders
INSERT INTO founders (name, bio, linkedin_url, twitter_handle, key_lessons, pivotal_moments)
VALUES
  ('Tobi Lütke', 'Co-founder and CEO of Shopify', 'https://www.linkedin.com/in/tobias-lutke-shopify/', 'tobi', ARRAY['Focus on the long-term', 'Empower merchants'], ARRAY['{"year": 2004, "event": "Started Snowdevil, an online snowboard shop"}'::jsonb, '{"year": 2006, "event": "Pivoted Snowdevil to become Shopify"}'::jsonb]),
('Stewart Butterfield', 'Co-founder of Slack and Flickr', 'https://www.linkedin.com/in/stewart-butterfield/', 'stewart', ARRAY['Embrace serendipity', 'Build for simplicity'], ARRAY['{"year": 2002, "event": "Founded Ludicorp and created Game Neverending"}'::jsonb, '{"year": 2013, "event": "Pivoted from game development to Slack"}'::jsonb]),
  ('Daniel Dines', 'Co-founder and CEO of UiPath', 'https://www.linkedin.com/in/daniel-dines/', 'danieldines', ARRAY['Automate repetitive tasks', 'Focus on employee satisfaction'], ARRAY['{"year": 2005, "event": "Founded DeskOver in Bucharest"}'::jsonb, '{"year": 2015, "event": "Rebranded as UiPath and moved to New York"}'::jsonb]),  
  ('Tope Awotona', 'Founder and CEO of Calendly', 'https://www.linkedin.com/in/topeawotona/', 'topeawotona', ARRAY['Solve real problems', 'Bootstrap for control'], ARRAY['{"year": 2013, "event": "Founded Calendly after struggling with scheduling"}'::jsonb, '{"year": 2019, "event": "Reached profitability without external funding"}'::jsonb]),
  ('Melanie Perkins', 'Co-founder and CEO of Canva', 'https://www.linkedin.com/in/melanieperkins/', 'melaniecanva', ARRAY['Democratize design', 'Focus on user experience'], ARRAY['{"year": 2007, "event": "Created Fusion Books, an online yearbook design system"}'::jsonb, '{"year": 2012, "event": "Founded Canva to make design accessible to everyone"}'::jsonb]),
  ('Ryan Smith', 'Co-founder and CEO of Qualtrics', 'https://www.linkedin.com/in/ryangsmith/', 'RyanQualtrics', ARRAY['Bootstrap for growth', 'Focus on customer experience'], ARRAY['{"year": 2002, "event": "Started Qualtrics in his father''s basement"}'::jsonb, '{"year": 2018, "event": "Sold Qualtrics to SAP for $8 billion"}'::jsonb]),
  ('Dustin Moskovitz', 'Co-founder and CEO of Asana', 'https://www.linkedin.com/in/dustinmoskovitz/', 'moskov', ARRAY['Build tools for productivity', 'Focus on company culture'], ARRAY['{"year": 2004, "event": "Co-founded Facebook"}'::jsonb, '{"year": 2008, "event": "Left Facebook to start Asana"}'::jsonb]),
  ('Aaron Levie', 'Co-founder and CEO of Box', 'https://www.linkedin.com/in/aaronlevie/', 'levie', ARRAY['Adapt to market changes', 'Focus on enterprise needs'], ARRAY['{"year": 2005, "event": "Founded Box as a college project"}'::jsonb, '{"year": 2014, "event": "Took Box public"}'::jsonb]),
  ('Eric Yuan', 'Founder and CEO of Zoom', 'https://www.linkedin.com/in/ericsyuan/', 'ericsyuan', ARRAY['Prioritize customer happiness', 'Build for scalability'], ARRAY['{"year": 2011, "event": "Left Cisco WebEx to found Zoom"}'::jsonb, '{"year": 2019, "event": "Took Zoom public"}'::jsonb]),
  ('Whitney Wolfe Herd', 'Founder and CEO of Bumble', 'https://www.linkedin.com/in/whitney-wolfe-1791a299/', 'WhitWolfeHerd', ARRAY['Empower women in dating', 'Create a safe online environment'], ARRAY['{"year": 2014, "event": "Founded Bumble after leaving Tinder"}'::jsonb, '{"year": 2021, "event": "Became the youngest female CEO to take a company public"}'::jsonb]),
  ('Olivier Pomel', 'Co-founder and CEO of Datadog', 'https://www.linkedin.com/in/olivierpomel/', 'opomel', ARRAY['Unify data monitoring', 'Build for developers'], ARRAY['{"year": 2010, "event": "Founded Datadog"}'::jsonb, '{"year": 2019, "event": "Took Datadog public"}'::jsonb]),
  ('Sid Sijbrandij', 'Co-founder and CEO of GitLab', 'https://www.linkedin.com/in/sijbrandij/', 'sytses', ARRAY['Embrace remote work', 'Practice radical transparency'], ARRAY['{"year": 2011, "event": "Started GitLab as an open-source project"}'::jsonb, '{"year": 2019, "event": "Raised $268 million in Series E funding"}'::jsonb]),
  ('Mathilde Collin', 'Co-founder and CEO of Front', 'https://www.linkedin.com/in/mathildecollin/', 'collinmathilde', ARRAY['Focus on team communication', 'Build with empathy'], ARRAY['{"year": 2013, "event": "Founded Front"}'::jsonb, '{"year": 2020, "event": "Raised $59 million in Series C funding"}'::jsonb]),
  ('Spenser Skates', 'Co-founder and CEO of Amplitude', 'https://www.linkedin.com/in/spenserskates/', 'spenserskates', ARRAY['Data-driven product decisions', 'Focus on user behavior'], ARRAY['{"year": 2012, "event": "Founded Amplitude"}'::jsonb, '{"year": 2021, "event": "Took Amplitude public through direct listing"}'::jsonb]),
  ('Dylan Field', 'Co-founder and CEO of Figma', 'https://www.linkedin.com/in/dylanfield/', 'zoink', ARRAY['Collaborative design', 'Web-first approach'], ARRAY['{"year": 2012, "event": "Founded Figma"}'::jsonb, '{"year": 2022, "event": "Agreed to acquisition by Adobe for $20 billion"}'::jsonb]),
  ('Zach Perret', 'Co-founder and CEO of Plaid', 'https://www.linkedin.com/in/zachperret/', 'zachperret', ARRAY['Connect financial data', 'Build developer-friendly APIs'], ARRAY['{"year": 2013, "event": "Founded Plaid"}'::jsonb, '{"year": 2021, "event": "Valued at $13.4 billion after canceled Visa acquisition"}'::jsonb]),
  ('Amir Salihefendić', 'Founder and CEO of Doist', 'https://www.linkedin.com/in/amix3k/', 'amix3k', ARRAY['Remote-first culture', 'Build sustainable products'], ARRAY['{"year": 2007, "event": "Created Todoist as a personal project"}'::jsonb, '{"year": 2015, "event": "Launched Twist, a team communication app"}'::jsonb]),
  ('Suhail Doshi', 'Co-founder and former CEO of Mixpanel', 'https://www.linkedin.com/in/suhail/', 'suhail', ARRAY['Focus on actionable analytics', 'Build for rapid implementation'], ARRAY['{"year": 2009, "event": "Founded Mixpanel at age 20"}'::jsonb, '{"year": 2017, "event": "Stepped down as CEO to become Chairman"}'::jsonb]),
  ('Vlad Tenev', 'Co-founder and CEO of Robinhood', 'https://www.linkedin.com/in/vladtenev/', 'vladtenev', ARRAY['Democratize finance', 'Mobile-first approach'], ARRAY['{"year": 2013, "event": "Founded Robinhood"}'::jsonb, '{"year": 2021, "event": "Took Robinhood public"}'::jsonb]),
  ('Patrick Collison', 'Co-founder and CEO of Stripe', 'https://www.linkedin.com/in/patrickc42/', 'patrickc', ARRAY['Simplify online payments', 'Developer-centric approach'], ARRAY['{"year": 2010, "event": "Founded Stripe with his brother John"}'::jsonb, '{"year": 2021, "event": "Raised funding at a $95 billion valuation"}'::jsonb]),
('Brian Halligan', 'Co-founder and Executive Chairman of HubSpot', 'https://www.linkedin.com/in/brianhalligan/', 'bhalligan', 
   ARRAY['Inbound marketing', 'Company culture matters'], 
   ARRAY[
     '{"year": 2006, "event": "Co-founded HubSpot"}'::jsonb, 
     '{"year": 2014, "event": "HubSpot IPO"}'::jsonb
   ]),
  ('Yvon Chouinard', 'Founder of Patagonia', 'https://www.linkedin.com/company/patagonia_2/', 'patagonia', 
   ARRAY['Sustainable business practices', 'Environmental activism'], 
   ARRAY[
     '{"year": 1973, "event": "Founded Patagonia"}'::jsonb, 
     '{"year": 2022, "event": "Transferred ownership to fight climate change"}'::jsonb
   ]),
  ('Evan Spiegel', 'Co-founder and CEO of Snap Inc.', 'https://www.linkedin.com/in/evan-spiegel-2a2a9b161/', 'evanspiegel', 
   ARRAY['Innovate in social media', 'Focus on camera-first communication'], 
   ARRAY[
     '{"year": 2011, "event": "Created Snapchat as a college project"}'::jsonb, 
     '{"year": 2017, "event": "Snap Inc. IPO"}'::jsonb
   ]),
  ('Katrina Lake', 'Founder and former CEO of Stitch Fix', 'https://www.linkedin.com/in/katrina-lake-8b713a1/', 'kmlake', 
   ARRAY['Personalization at scale', 'Data-driven fashion'], 
   ARRAY[
     '{"year": 2011, "event": "Founded Stitch Fix"}'::jsonb, 
     '{"year": 2017, "event": "Stitch Fix IPO"}'::jsonb
   ]),
  ('Jeff Green', 'Co-founder and CEO of The Trade Desk', 'https://www.linkedin.com/in/jeffgreen1/', 'jeffgreen', 
   ARRAY['Programmatic advertising', 'Value of open internet'], 
   ARRAY[
     '{"year": 2009, "event": "Founded The Trade Desk"}'::jsonb, 
     '{"year": 2016, "event": "The Trade Desk IPO"}'::jsonb
   ]),
  ('Jennifer Hyman', 'Co-founder and CEO of Rent the Runway', 'https://www.linkedin.com/in/jennifer-hyman-8b01662/', 'jenn_hyman', 
   ARRAY['Disrupt traditional retail', 'Sustainability in fashion'], 
   ARRAY[
     '{"year": 2009, "event": "Founded Rent the Runway"}'::jsonb, 
     '{"year": 2021, "event": "Rent the Runway IPO"}'::jsonb
   ]),
  ('Tien Tzuo', 'Founder and CEO of Zuora', 'https://www.linkedin.com/in/tientzuo/', 'tientzuo', 
   ARRAY['Subscription economy', 'Customer-centric business models'], 
   ARRAY[
     '{"year": 2007, "event": "Founded Zuora"}'::jsonb, 
     '{"year": 2018, "event": "Zuora IPO"}'::jsonb
   ]),
  ('Anjali Sud', 'CEO of Vimeo', 'https://www.linkedin.com/in/anjalisud/', 'anjalisud', 
   ARRAY['Focus on creator economy', 'Pivot to SaaS model'], 
   ARRAY[
     '{"year": 2017, "event": "Became CEO of Vimeo"}'::jsonb, 
     '{"year": 2021, "event": "Vimeo spin-off and IPO"}'::jsonb
   ]),
  ('Amir Dan Rubin', 'CEO of One Medical', 'https://www.linkedin.com/in/amir-dan-rubin-4b8b1b4/', 'amirdanrubin', 
   ARRAY['Modernize primary care', 'Technology in healthcare'], 
   ARRAY[
     '{"year": 2017, "event": "Joined One Medical as CEO"}'::jsonb, 
     '{"year": 2020, "event": "One Medical IPO"}'::jsonb
   ]),
  ('Arash Ferdowsi', 'Co-founder of Dropbox', 'https://www.linkedin.com/in/arashferdowsi/', 'arashf', 
   ARRAY['Simplify file sharing', 'Focus on user experience'], 
   ARRAY[
     '{"year": 2007, "event": "Co-founded Dropbox"}'::jsonb, 
     '{"year": 2018, "event": "Dropbox IPO"}'::jsonb
   ]),
  ('Melanie Perkins', 'Co-founder and CEO of Canva', 'https://www.linkedin.com/in/melanieperkins/', 'melaniecanva', 
   ARRAY['Democratize design', 'Freemium model'], 
   ARRAY[
     '{"year": 2012, "event": "Co-founded Canva"}'::jsonb, 
     '{"year": 2021, "event": "Canva valued at $40 billion"}'::jsonb
   ]),
  ('Mikkel Svane', 'Co-founder and CEO of Zendesk', 'https://www.linkedin.com/in/mikkelsvane/', 'mikkelsvane', 
   ARRAY['Customer-centric support', 'Simplify complex processes'], 
   ARRAY[
     '{"year": 2007, "event": "Co-founded Zendesk"}'::jsonb, 
     '{"year": 2014, "event": "Zendesk IPO"}'::jsonb
   ]),
  ('Therese Tucker', 'Founder and Executive Chair of BlackLine', 'https://www.linkedin.com/in/theresetucker/', 'therese_tucker', 
   ARRAY['Automate financial processes', 'Women in tech leadership'], 
   ARRAY[
     '{"year": 2001, "event": "Founded BlackLine"}'::jsonb, 
     '{"year": 2016, "event": "BlackLine IPO"}'::jsonb
   ]),
  ('Aneel Bhusri', 'Co-founder and CEO of Workday', 'https://www.linkedin.com/in/aneelbhusri/', 'aneelbhusri', 
   ARRAY['Cloud-based enterprise software', 'Employee-first culture'], 
   ARRAY[
     '{"year": 2005, "event": "Co-founded Workday"}'::jsonb, 
     '{"year": 2012, "event": "Workday IPO"}'::jsonb
   ]),
  ('Adi Tatarko', 'Co-founder and CEO of Houzz', 'https://www.linkedin.com/in/adi-tatarko-9a1a2b4/', 'aditatarko', 
   ARRAY['Community-driven platforms', 'Home renovation tech'], 
   ARRAY[
     '{"year": 2009, "event": "Founded Houzz"}'::jsonb, 
     '{"year": 2017, "event": "Raised $400 million at $4 billion valuation"}'::jsonb
   ]),
  ('Zander Lurie', 'CEO of SurveyMonkey (now Momentive)', 'https://www.linkedin.com/in/zanderlurie/', 'zlurie', 
   ARRAY['Data-driven insights', 'Evolve with market needs'], 
   ARRAY[
     '{"year": 2016, "event": "Became CEO of SurveyMonkey"}'::jsonb, 
     '{"year": 2018, "event": "SurveyMonkey IPO"}'::jsonb
   ]),
  ('Shantanu Narayen', 'Chairman and CEO of Adobe', 'https://www.linkedin.com/in/shantanunarayen/', 'shantanunarayen', 
   ARRAY['Digital transformation', 'Subscription-based model'], 
   ARRAY[
     '{"year": 1998, "event": "Joined Adobe"}'::jsonb, 
     '{"year": 2007, "event": "Became CEO of Adobe"}'::jsonb
   ]),
  ('Safra Catz', 'CEO of Oracle', 'https://www.linkedin.com/in/safra-catz-4ab68b161/', 'safracatz', 
   ARRAY['Strategic acquisitions', 'Cloud infrastructure'], 
   ARRAY[
     '{"year": 1999, "event": "Joined Oracle"}'::jsonb, 
     '{"year": 2014, "event": "Became CEO of Oracle"}'::jsonb
   ]),
  ('Jayshree Ullal', 'President and CEO of Arista Networks', 'https://www.linkedin.com/in/jayshree-ullal-9b08a5/', 'jayshree_ullal', 
   ARRAY['Software-driven networking', 'Disrupt established markets'], 
   ARRAY[
     '{"year": 2008, "event": "Joined Arista as CEO"}'::jsonb, 
     '{"year": 2014, "event": "Arista Networks IPO"}'::jsonb
   ]),
  ('Nikesh Arora', 'CEO of Palo Alto Networks', 'https://www.linkedin.com/in/nikesharora/', 'nikesharora', 
   ARRAY['Cybersecurity innovation', 'AI in security'], 
   ARRAY[
     '{"year": 2018, "event": "Became CEO of Palo Alto Networks"}'::jsonb, 
     '{"year": 2020, "event": "Acquired CloudGenix for $420 million"}'::jsonb
   ]),
  ('Rana el Kaliouby', 'Co-founder and CEO of Affectiva', 'https://www.linkedin.com/in/kaliouby/', 'kaliouby', 
   ARRAY['Emotion AI', 'Ethics in AI'], 
   ARRAY[
     '{"year": 2009, "event": "Co-founded Affectiva"}'::jsonb, 
     '{"year": 2021, "event": "Affectiva acquired by Smart Eye"}'::jsonb
   ]),
  ('Steph Korey', 'Co-founder of Away', 'https://www.linkedin.com/in/stephkorey/', 'stephkorey', 
   ARRAY['Direct-to-consumer model', 'Brand storytelling'], 
   ARRAY[
     '{"year": 2015, "event": "Co-founded Away"}'::jsonb, 
     '{"year": 2019, "event": "Away valued at $1.4 billion"}'::jsonb
   ]),
  ('Anil Chakravarthy', 'CEO of Informatica', 'https://www.linkedin.com/in/anilchakravarthy/', 'AnilChakravarth', 
   ARRAY['Data management', 'Cloud transformation'], 
   ARRAY[
     '{"year": 2016, "event": "Became CEO of Informatica"}'::jsonb, 
     '{"year": 2021, "event": "Informatica IPO"}'::jsonb
   ]),
  ('Yamini Rangan', 'CEO of HubSpot', 'https://www.linkedin.com/in/yaminirangan/', 'yaminirangan', 
   ARRAY['Customer-first approach', 'Scaling company culture'], 
   ARRAY[
     '{"year": 2020, "event": "Joined HubSpot as Chief Customer Officer"}'::jsonb, 
     '{"year": 2021, "event": "Became CEO of HubSpot"}'::jsonb
   ]),
  ('Amit Yoran', 'Chairman and CEO of Tenable', 'https://www.linkedin.com/in/amit-yoran-1577a81/', 'ayoran', 
   ARRAY['Cybersecurity leadership', 'Vulnerability management'], 
   ARRAY[
     '{"year": 2016, "event": "Became CEO of Tenable"}'::jsonb, 
     '{"year": 2018, "event": "Tenable IPO"}'::jsonb
   ]),
  ('Tomer Weingarten', 'Co-founder and CEO of SentinelOne', 'https://www.linkedin.com/in/tomerweingarten/', 'tomerweingarten', 
   ARRAY['AI in cybersecurity', 'Autonomous protection'], 
   ARRAY[
     '{"year": 2013, "event": "Co-founded SentinelOne"}'::jsonb, 
     '{"year": 2021, "event": "SentinelOne IPO"}'::jsonb
   ]),
  ('Renaud Laplanche', 'Co-founder and CEO of Upgrade', 'https://www.linkedin.com/in/renaudlaplanche/', 'renaudlaplanche', 
   ARRAY['Fintech innovation', 'Credit accessibility'], 
   ARRAY[
     '{"year": 2016, "event": "Founded Upgrade"}'::jsonb, 
     '{"year": 2021, "event": "Upgrade valued at $6.28 billion"}'::jsonb
   ]),
  ('Olivier Pomel', 'Co-founder and CEO of Datadog', 'https://www.linkedin.com/in/olivierpomel/', 'opomel', 
   ARRAY['Unified monitoring', 'DevOps culture'], 
   ARRAY[
     '{"year": 2010, "event": "Co-founded Datadog"}'::jsonb, 
     '{"year": 2019, "event": "Datadog IPO"}'::jsonb
   ]);
-- Insert Products
INSERT INTO saas_products (name, description, website, category, founding_year, timeline, success_metrics)
VALUES
  ('Shopify', 'E-commerce platform for online stores and retail point-of-sale systems', 'https://www.shopify.com', 'E-commerce', 2006, ARRAY['{"year": 2006, "event": "Shopify launches"}'::jsonb, '{"year": 2015, "event": "IPO on NYSE"}'::jsonb], '{"GMV": "$307 billion in 2022", "Merchants": "Over 2 million in 2023"}'),
  ('Slack', 'Business communication platform offering many IRC-style features', 'https://slack.com', 'Communication', 2013, ARRAY['{"year": 2013, "event": "Slack launches"}'::jsonb, '{"year": 2020, "event": "Acquired by Salesforce"}'::jsonb], '{"DAU": "18 million in 2023", "Paid Customers": "Over 200,000 in 2023"}'),
  ('UiPath', 'Robotic process automation software', 'https://www.uipath.com', 'Automation', 2005, ARRAY['{"year": 2005, "event": "Founded as DeskOver"}'::jsonb, '{"year": 2021, "event": "IPO on NYSE"}'::jsonb], '{"ARR": "$1.2 billion in 2023", "Customers": "Over 10,000 in 2023"}'),
  ('Calendly', 'Scheduling automation platform', 'https://calendly.com', 'Productivity', 2013, ARRAY['{"year": 2013, "event": "Calendly launches"}'::jsonb, '{"year": 2021, "event": "Raised $350 million at $3 billion valuation"}'::jsonb], '{"Users": "Over 10 million in 2023", "Meetings Scheduled": "1.5 billion since inception"}'),
  ('Canva', 'Graphic design platform', 'https://www.canva.com', 'Design', 2012, ARRAY['{"year": 2012, "event": "Canva founded"}'::jsonb, '{"year": 2021, "event": "Valued at $40 billion"}'::jsonb], '{"Users": "Over 100 million in 2023", "Designs Created": "Over 10 billion"}'),
  ('Qualtrics', 'Experience management platform', 'https://www.qualtrics.com', 'Customer Experience', 2002, ARRAY['{"year": 2002, "event": "Qualtrics founded"}'::jsonb, '{"year": 2021, "event": "Spun off from SAP in IPO"}'::jsonb], '{"Revenue": "$1.46 billion in 2022", "Customers": "Over 18,000 in 2023"}'),
  ('Asana', 'Project management and collaboration software', 'https://asana.com', 'Project Management', 2008, ARRAY['{"year": 2008, "event": "Asana founded"}'::jsonb, '{"year": 2020, "event": "Direct listing on NYSE"}'::jsonb], '{"Revenue": "$547.2 million in FY 2023", "Paid Customers": "Over 135,000 in 2023"}'),
  ('Box', 'Cloud content management and file sharing service', 'https://www.box.com', 'Cloud Storage', 2005, ARRAY['{"year": 2005, "event": "Box founded"}'::jsonb, '{"year": 2015, "event": "IPO on NYSE"}'::jsonb], '{"Revenue": "$990 million in FY 2023", "Fortune 500 Customers": "67% use Box"}'),
  ('Zoom', 'Video conferencing and online meeting platform', 'https://zoom.us', 'Communication', 2011, ARRAY['{"year": 2011, "event": "Zoom founded"}'::jsonb, '{"year": 2019, "event": "IPO on NASDAQ"}'::jsonb], '{"Revenue": "$4.39 billion in FY 2023", "Customers": "Over 500,000 businesses"}'),
  ('Bumble', 'Online dating and social networking platform', 'https://bumble.com', 'Social Networking', 2014, ARRAY['{"year": 2014, "event": "Bumble launched"}'::jsonb, '{"year": 2021, "event": "IPO on NASDAQ"}'::jsonb], '{"Revenue": "$903.5 million in 2022", "Paying Users": "3.5 million in Q4 2022"}'),
  ('Datadog', 'Monitoring and analytics platform for IT infrastructure', 'https://www.datadoghq.com', 'IT Operations', 2010, ARRAY['{"year": 2010, "event": "Datadog founded"}'::jsonb, '{"year": 2019, "event": "IPO on NASDAQ"}'], '{"Revenue": "$1.68 billion in 2022", "Customers": "Over 23,200 in 2023"}'),
  ('GitLab', 'DevOps lifecycle tool', 'https://about.gitlab.com', 'DevOps', 2011, ARRAY['{"year": 2011, "event": "GitLab founded"}'::jsonb, '{"year": 2021, "event": "IPO on NASDAQ"}'::jsonb], '{"Revenue": "$424.3 million in FY 2023", "Customers": "Over 7,000 in 2023"}'),
  ('Front', 'Customer communication hub', 'https://front.com', 'Customer Service', 2013, ARRAY['{"year": 2013, "event": "Front founded"}'::jsonb, '{"year": 2022, "event": "Raised $65 million in Series D"}'::jsonb], '{"Funding": "Over $200 million raised", "Customers": "Over 8,000 in 2023"}'),
  ('Amplitude', 'Product analytics platform', 'https://amplitude.com', 'Analytics', 2012, ARRAY['{"year": 2012, "event": "Amplitude founded"}'::jsonb, '{"year": 2021, "event": "Direct listing on NASDAQ"}'::jsonb], '{"Revenue": "$238.1 million in 2022", "Customers": "Over 2,000 in 2023"}'),
  ('Figma', 'Collaborative interface design tool', 'https://www.figma.com', 'Design', 2012, ARRAY['{"year": 2012, "event": "Figma founded"}'::jsonb, '{"year": 2022, "event": "Agreed to $20 billion acquisition by Adobe"}'::jsonb], '{"ARR": "Over $400 million in 2022", "Users": "Over 4 million in 2022"}'),
  ('Plaid', 'Financial services API provider', 'https://plaid.com', 'FinTech', 2013, ARRAY['{"year": 2013, "event": "Plaid founded"}'::jsonb, '{"year": 2021, "event": "Valued at $13.4 billion"}'::jsonb], '{"Funding": "Over $700 million raised", "Connected Accounts": "Over 12,000 in 2023"}'),
  ('Todoist', 'Task management application', 'https://todoist.com', 'Productivity', 2007, ARRAY['{"year": 2007, "event": "Todoist created"}'::jsonb, '{"year": 2017, "event": "Reached 10 million users"}'::jsonb], '{"Users": "Over 25 million in 2023", "Tasks Completed": "Over 2 billion"}'),
  ('Mixpanel', 'User behavior analytics platform', 'https://mixpanel.com', 'Analytics', 2009, ARRAY['{"year": 2009, "event": "Mixpanel founded"}'::jsonb, '{"year": 2021, "event": "Raised $200 million from Bain Capital"}'::jsonb], '{"Funding": "Over $300 million raised", "Data Points Analyzed": "Over 1 trillion monthly"}'),
  ('Robinhood', 'Commission-free stock trading and investing app', 'https://robinhood.com', 'FinTech', 2013, ARRAY['{"year": 2013, "event": "Robinhood founded"}'::jsonb, '{"year": 2021, "event": "IPO on NASDAQ"}'::jsonb], '{"Revenue": "$1.36 billion in 2022", "Monthly Active Users": "11.4 million in Q4 2022"}'),
  ('Stripe', 'Online payment processing platform', 'https://stripe.com', 'FinTech', 2010, ARRAY['{"year": 2010, "event": "Stripe founded"}'::jsonb, '{"year": 2021, "event": "Valued at $95 billion"}'::jsonb], '{"Revenue": "Estimated $12 billion in 2022", "Users": "Millions of businesses globally"}'),
('HubSpot', 'Inbound marketing, sales, and service software', 'https://www.hubspot.com', 'Marketing & Sales', 2006, 
   ARRAY[
     '{"year": 2006, "event": "HubSpot founded"}'::jsonb, 
     '{"year": 2014, "event": "IPO on NYSE"}'::jsonb
   ], 
   '{"Revenue": "$1.65 billion in 2022", "Customers": "Over 150,000 in 2023"}'::jsonb),
  ('Patagonia', 'Outdoor clothing and gear company', 'https://www.patagonia.com', 'E-commerce & Sustainability', 1973, 
   ARRAY[
     '{"year": 1973, "event": "Patagonia founded"}'::jsonb, 
     '{"year": 2022, "event": "Ownership transferred to fight climate change"}'::jsonb
   ], 
   '{"Revenue": "$1.5 billion in 2022", "B Corp Score": "151.4 in 2023"}'::jsonb),
  ('Snapchat', 'Multimedia messaging app', 'https://www.snapchat.com', 'Social Media', 2011, 
   ARRAY[
     '{"year": 2011, "event": "Snapchat launched"}'::jsonb, 
     '{"year": 2017, "event": "IPO as Snap Inc."}'::jsonb
   ], 
   '{"DAU": "375 million in Q1 2023", "Revenue": "$4.6 billion in 2022"}'::jsonb),
  ('Stitch Fix', 'Online personal styling service', 'https://www.stitchfix.com', 'E-commerce & Fashion', 2011, 
   ARRAY[
     '{"year": 2011, "event": "Stitch Fix founded"}'::jsonb, 
     '{"year": 2017, "event": "IPO on NASDAQ"}'::jsonb
   ], 
   '{"Revenue": "$1.6 billion in FY 2022", "Active Clients": "3.3 million in Q2 2023"}'::jsonb),
  ('The Trade Desk', 'Programmatic advertising platform', 'https://www.thetradedesk.com', 'Advertising', 2009, 
   ARRAY[
     '{"year": 2009, "event": "The Trade Desk founded"}'::jsonb, 
     '{"year": 2016, "event": "IPO on NASDAQ"}'::jsonb
   ], 
   '{"Revenue": "$1.6 billion in 2022", "Customer Retention": "Over 95% since 2015"}'::jsonb),
  ('Rent the Runway', 'Online clothing rental service', 'https://www.renttherunway.com', 'Fashion & Sharing Economy', 2009, 
   ARRAY[
     '{"year": 2009, "event": "Rent the Runway founded"}'::jsonb, 
     '{"year": 2021, "event": "IPO on NASDAQ"}'::jsonb
   ], 
   '{"Revenue": "$296.4 million in 2022", "Active Subscribers": "134,240 in Q4 2022"}'::jsonb),
  ('Zuora', 'Subscription management platform', 'https://www.zuora.com', 'Subscription Economy', 2007, 
   ARRAY[
     '{"year": 2007, "event": "Zuora founded"}'::jsonb, 
     '{"year": 2018, "event": "IPO on NYSE"}'::jsonb
   ], 
   '{"Revenue": "$396.1 million in FY 2023", "Customers": "Over 1,000 in 2023"}'::jsonb),
  ('Vimeo', 'Video hosting, sharing, and services platform', 'https://vimeo.com', 'Video Technology', 2004, 
   ARRAY[
     '{"year": 2004, "event": "Vimeo founded"}'::jsonb, 
     '{"year": 2021, "event": "Spin-off and IPO on NASDAQ"}'::jsonb
   ], 
   '{"Revenue": "$433 million in 2022", "Subscribers": "1.8 million in Q4 2022"}'::jsonb),
  ('One Medical', 'Membership-based primary care organization', 'https://www.onemedical.com', 'Healthcare', 2007, 
   ARRAY[
     '{"year": 2007, "event": "One Medical founded"}'::jsonb, 
     '{"year": 2020, "event": "IPO on NASDAQ"}'::jsonb
   ], 
   '{"Revenue": "$1.05billion in 2022", "Members": "836,000 in Q4 2022"}'::jsonb),
('Dropbox', 'File hosting and collaboration platform', 'https://www.dropbox.com', 'Cloud Storage', 2007,
ARRAY[
'{"year": 2007, "event": "Dropbox founded"}'::jsonb,
'{"year": 2018, "event": "IPO on NASDAQ"}'::jsonb
],
'{"Revenue": "$2.32 billion in 2022", "Paying Users": "17.77 million in Q4 2022"}'::jsonb),
('Canva', 'Graphic design platform', 'https://www.canva.com', 'Design', 2012,
ARRAY[
'{"year": 2012, "event": "Canva founded"}'::jsonb,
'{"year": 2021, "event": "Valued at $40 billion"}'::jsonb
],
'{"Monthly Active Users": "Over 100 million in 2023", "Valuation": "$40 billion in 2021"}'::jsonb),
('Zendesk', 'Customer service software and support ticket system', 'https://www.zendesk.com', 'Customer Service', 2007,
ARRAY[
'{"year": 2007, "event": "Zendesk founded"}'::jsonb,
'{"year": 2014, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$1.71 billion in 2022", "Customers": "Over 170,000 in 2023"}'::jsonb),
('BlackLine', 'Cloud-based financial software', 'https://www.blackline.com', 'Financial Technology', 2001,
ARRAY[
'{"year": 2001, "event": "BlackLine founded"}'::jsonb,
'{"year": 2016, "event": "IPO on NASDAQ"}'::jsonb
],
'{"Revenue": "$522.9 million in 2022", "Customers": "Over 4,000 in 2023"}'::jsonb),
('Workday', 'Enterprise cloud applications for finance and HR', 'https://www.workday.com', 'Enterprise Software', 2005,
ARRAY[
'{"year": 2005, "event": "Workday founded"}'::jsonb,
'{"year": 2012, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$6.22 billion in FY 2023", "Customers": "Over 10,000 in 2023"}'::jsonb),
('Houzz', 'Home renovation and design platform', 'https://www.houzz.com', 'Home & Design', 2009,
ARRAY[
'{"year": 2009, "event": "Houzz founded"}'::jsonb,
'{"year": 2017, "event": "Raised $400 million at $4 billion valuation"}'::jsonb
],
'{"Monthly Unique Users": "Over 65 million", "Professionals on Platform": "Over 3 million"}'::jsonb),
('SurveyMonkey', 'Online survey development cloud-based software', 'https://www.surveymonkey.com', 'Survey & Analytics', 1999,
ARRAY[
'{"year": 1999, "event": "SurveyMonkey founded"}'::jsonb,
'{"year": 2018, "event": "IPO on NASDAQ"}'::jsonb
],
'{"Revenue": "$480.9 million in 2022", "Enterprise Sales Customers": "10,723 in Q4 2022"}'::jsonb),
('Adobe', 'Digital media and marketing software', 'https://www.adobe.com', 'Creative Software', 1982,
ARRAY[
'{"year": 1982, "event": "Adobe founded"}'::jsonb,
'{"year": 2013, "event": "Shifted to cloud-based subscription model"}'::jsonb
],
'{"Revenue": "$17.61 billion in FY 2022", "Creative Cloud Subscribers": "Over 29 million in 2023"}'::jsonb),
('Oracle', 'Database software and cloud engineered systems', 'https://www.oracle.com', 'Enterprise Software', 1977,
ARRAY[
'{"year": 1977, "event": "Oracle founded"}'::jsonb,
'{"year": 2020, "event": "Moved headquarters to Austin, Texas"}'::jsonb
],
'{"Revenue": "$44.66 billion in FY 2023", "Cloud Services Customers": "Over 430,000 in 2023"}'::jsonb),
('Arista Networks', 'Cloud networking solutions', 'https://www.arista.com', 'Networking', 2004,
ARRAY[
'{"year": 2004, "event": "Arista Networks founded"}'::jsonb,
'{"year": 2014, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$4.38 billion in 2022", "Customers": "Over 8,000 in 2023"}'::jsonb),
('Palo Alto Networks', 'Cybersecurity solutions', 'https://www.paloaltonetworks.com', 'Cybersecurity', 2005,
ARRAY[
'{"year": 2005, "event": "Palo Alto Networks founded"}'::jsonb,
'{"year": 2012, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$5.5 billion in FY 2022", "Fortune 100 Customers": "85 in 2023"}'::jsonb),
('Affectiva', 'Artificial Emotional Intelligence', 'https://www.affectiva.com', 'AI & Machine Learning', 2009,
ARRAY[
'{"year": 2009, "event": "Affectiva founded"}'::jsonb,
'{"year": 2021, "event": "Acquired by Smart Eye"}'::jsonb
],
'{"Emotion Data Points": "Over 10 million", "Countries Analyzed": "87 in 2021"}'::jsonb),
('Away', 'Travel and lifestyle brand', 'https://www.awaytravel.com', 'E-commerce & Travel', 2015,
ARRAY[
'{"year": 2015, "event": "Away founded"}'::jsonb,
'{"year": 2019, "event": "Valued at $1.4 billion"}'::jsonb
],
'{"Revenue": "Estimated $300 million in 2019", "Instagram Followers": "Over 600,000 in 2023"}'::jsonb),
('Informatica', 'Enterprise cloud data management', 'https://www.informatica.com', 'Data Management', 1993,
ARRAY[
'{"year": 1993, "event": "Informatica founded"}'::jsonb,
'{"year": 2021, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$1.51 billion in 2022", "Customers": "Over 5,000 in 2023"}'::jsonb),
('Tenable', 'Cybersecurity risk management', 'https://www.tenable.com', 'Cybersecurity', 2002,
ARRAY[
'{"year": 2002, "event": "Tenable founded"}'::jsonb,
'{"year": 2018, "event": "IPO on NASDAQ"}'::jsonb
],
'{"Revenue": "$683.2 million in 2022", "Customers": "Over 40,000 in 2023"}'::jsonb),
('SentinelOne', 'Autonomous cybersecurity platform', 'https://www.sentinelone.com', 'Cybersecurity', 2013,
ARRAY[
'{"year": 2013, "event": "SentinelOne founded"}'::jsonb,
'{"year": 2021, "event": "IPO on NYSE"}'::jsonb
],
'{"Revenue": "$422.2 million in FY 2023", "Customers": "Over 10,000 in 2023"}'::jsonb),
('Upgrade', 'Fintech company offering credit and banking products', 'https://www.upgrade.com', 'Fintech', 2016,
ARRAY[
'{"year": 2016, "event": "Upgrade founded"}'::jsonb,
'{"year": 2021, "event": "Valued at $6.28 billion"}'::jsonb
],
'{"Loans Originated": "Over $14 billion since inception", "Credit Cards Issued": "Over 2 million in 2023"}'::jsonb),
('Datadog', 'Monitoring and analytics platform', 'https://www.datadoghq.com', 'IT Operations', 2010,
ARRAY[
'{"year": 2010, "event": "Datadog founded"}'::jsonb,
'{"year": 2019, "event": "IPO on NASDAQ"}'::jsonb
],
'{"Revenue": "$1.68 billion in 2022", "Customers": "Over 23,200 in Q1 2023"}'::jsonb);
-- Insert Founder-Product Relationships
INSERT INTO founder_product (founder_id, product_id, role)
VALUES
  ((SELECT id FROM founders WHERE name = 'Tobi Lütke'), (SELECT id FROM saas_products WHERE name = 'Shopify'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Stewart Butterfield'), (SELECT id FROM saas_products WHERE name = 'Slack'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Daniel Dines'), (SELECT id FROM saas_products WHERE name = 'UiPath'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Tope Awotona'), (SELECT id FROM saas_products WHERE name = 'Calendly'), 'Founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Melanie Perkins'), (SELECT id FROM saas_products WHERE name = 'Canva'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Ryan Smith'), (SELECT id FROM saas_products WHERE name = 'Qualtrics'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Dustin Moskovitz'), (SELECT id FROM saas_products WHERE name = 'Asana'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Aaron Levie'), (SELECT id FROM saas_products WHERE name = 'Box'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Eric Yuan'), (SELECT id FROM saas_products WHERE name = 'Zoom'), 'Founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Whitney Wolfe Herd'), (SELECT id FROM saas_products WHERE name = 'Bumble'), 'Founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Olivier Pomel'), (SELECT id FROM saas_products WHERE name = 'Datadog'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Sid Sijbrandij'), (SELECT id FROM saas_products WHERE name = 'GitLab'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Mathilde Collin'), (SELECT id FROM saas_products WHERE name = 'Front'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Spenser Skates'), (SELECT id FROM saas_products WHERE name = 'Amplitude'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Dylan Field'), (SELECT id FROM saas_products WHERE name = 'Figma'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Zach Perret'), (SELECT id FROM saas_products WHERE name = 'Plaid'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Amir Salihefendić'), (SELECT id FROM saas_products WHERE name = 'Todoist'), 'Founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Suhail Doshi'), (SELECT id FROM saas_products WHERE name = 'Mixpanel'), 'Co-founder & former CEO'),
  ((SELECT id FROM founders WHERE name = 'Vlad Tenev'), (SELECT id FROM saas_products WHERE name = 'Robinhood'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Patrick Collison'), (SELECT id FROM saas_products WHERE name = 'Stripe'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Brian Halligan'), (SELECT id FROM saas_products WHERE name = 'HubSpot'), 'Co-founder & Executive Chairman'),
((SELECT id FROM founders WHERE name = 'Yvon Chouinard'), (SELECT id FROM saas_products WHERE name = 'Patagonia'), 'Founder'),
((SELECT id FROM founders WHERE name = 'Evan Spiegel'), (SELECT id FROM saas_products WHERE name = 'Snapchat'), 'Co-founder & CEO'),
((SELECT id FROM founders WHERE name = 'Katrina Lake'), (SELECT id FROM saas_products WHERE name = 'Stitch Fix'), 'Founder & Former CEO'),
((SELECT id FROM founders WHERE name = 'Jeff Green'), (SELECT id FROM saas_products WHERE name = 'The Trade Desk'), 'Co-founder & CEO'),
((SELECT id FROM founders WHERE name = 'Jennifer Hyman'), (SELECT id FROM saas_products WHERE name = 'Rent the Runway'), 'Co-founder & CEO'),
((SELECT id FROM founders WHERE name = 'Tien Tzuo'), (SELECT id FROM saas_products WHERE name = 'Zuora'), 'Founder & CEO'),
((SELECT id FROM founders WHERE name = 'Anjali Sud'), (SELECT id FROM saas_products WHERE name = 'Vimeo'), 'CEO'),
((SELECT id FROM founders WHERE name = 'Amir Dan Rubin'), (SELECT id FROM saas_products WHERE name = 'One Medical'), 'CEO'),
((SELECT id FROM founders WHERE name = 'Arash Ferdowsi'), (SELECT id FROM saas_products WHERE name = 'Dropbox'), 'Co-founder'),
((SELECT id FROM founders WHERE name = 'Melanie Perkins'), (SELECT id FROM saas_products WHERE name = 'Canva'), 'Co-founder & CEO'),
((SELECT id FROM founders WHERE name = 'Mikkel Svane'), (SELECT id FROM saas_products WHERE name = 'Zendesk'), 'Co-founder & CEO'),
((SELECT id FROM founders WHERE name = 'Therese Tucker'), (SELECT id FROM saas_products WHERE name = 'BlackLine'), 'Founder & Executive Chair'),
  ((SELECT id FROM founders WHERE name = 'Aneel Bhusri'), (SELECT id FROM saas_products WHERE name = 'Workday'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Adi Tatarko'), (SELECT id FROM saas_products WHERE name = 'Houzz'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Zander Lurie'), (SELECT id FROM saas_products WHERE name = 'SurveyMonkey'), 'CEO'),
  ((SELECT id FROM founders WHERE name = 'Shantanu Narayen'), (SELECT id FROM saas_products WHERE name = 'Adobe'), 'Chairman & CEO'),
  ((SELECT id FROM founders WHERE name = 'Safra Catz'), (SELECT id FROM saas_products WHERE name = 'Oracle'), 'CEO'),
  ((SELECT id FROM founders WHERE name = 'Jayshree Ullal'), (SELECT id FROM saas_products WHERE name = 'Arista Networks'), 'President & CEO'),
  ((SELECT id FROM founders WHERE name = 'Nikesh Arora'), (SELECT id FROM saas_products WHERE name = 'Palo Alto Networks'), 'CEO'),
  ((SELECT id FROM founders WHERE name = 'Rana el Kaliouby'), (SELECT id FROM saas_products WHERE name = 'Affectiva'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Steph Korey'), (SELECT id FROM saas_products WHERE name = 'Away'), 'Co-founder'),
  ((SELECT id FROM founders WHERE name = 'Anil Chakravarthy'), (SELECT id FROM saas_products WHERE name = 'Informatica'), 'CEO'),
  ((SELECT id FROM founders WHERE name = 'Yamini Rangan'), (SELECT id FROM saas_products WHERE name = 'HubSpot'), 'CEO'),
  ((SELECT id FROM founders WHERE name = 'Amit Yoran'), (SELECT id FROM saas_products WHERE name = 'Tenable'), 'Chairman & CEO'),
  ((SELECT id FROM founders WHERE name = 'Tomer Weingarten'), (SELECT id FROM saas_products WHERE name = 'SentinelOne'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Renaud Laplanche'), (SELECT id FROM saas_products WHERE name = 'Upgrade'), 'Co-founder & CEO'),
  ((SELECT id FROM founders WHERE name = 'Olivier Pomel'), (SELECT id FROM saas_products WHERE name = 'Datadog'), 'Co-founder & CEO');