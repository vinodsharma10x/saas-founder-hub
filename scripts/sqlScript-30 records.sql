
select count (name), name
      from
        saas_products group by name 

-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing

-- Insert Founder-Product Relationships
insert into
  founder_product (founder_id, product_id, role)
values
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Brian Halligan'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'HubSpot'
      limit
        1
    ),
    'Co-founder & Executive Chairman'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Yvon Chouinard'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Patagonia'
      limit
        1
    ),
    'Founder'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Evan Spiegel'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Snapchat'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Katrina Lake'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Stitch Fix'
      limit
        1
    ),
    'Founder & Former CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Jeff Green'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'The Trade Desk'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Jennifer Hyman'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Rent the Runway'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Tien Tzuo'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Zuora'
      limit
        1
    ),
    'Founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Anjali Sud'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Vimeo'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Amir Dan Rubin'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'One Medical'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Arash Ferdowsi'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Dropbox'
      limit
        1
    ),
    'Co-founder'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Melanie Perkins'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Canva'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Mikkel Svane'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Zendesk'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Therese Tucker'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'BlackLine'
      limit
        1
    ),
    'Founder & Executive Chair'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Aneel Bhusri'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Workday'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Adi Tatarko'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Houzz'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Zander Lurie'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'SurveyMonkey'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Shantanu Narayen'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Adobe'
      limit
        1
    ),
    'Chairman & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Safra Catz'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Oracle'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Jayshree Ullal'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Arista Networks'
      limit
        1
    ),
    'President & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Nikesh Arora'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Palo Alto Networks'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Rana el Kaliouby'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Affectiva'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Steph Korey'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Away'
      limit
        1
    ),
    'Co-founder'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Anil Chakravarthy'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Informatica'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Yamini Rangan'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'HubSpot'
      limit
        1
    ),
    'CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Amit Yoran'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Tenable'
      limit
        1
    ),
    'Chairman & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Tomer Weingarten'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'SentinelOne'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Renaud Laplanche'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Upgrade'
      limit
        1
    ),
    'Co-founder & CEO'
  ),
  (
    (
      select distinct
        id
      from
        founders
      where
        name = 'Olivier Pomel'
      limit
        1
    ),
    (
      select distinct
        id
      from
        saas_products
      where
        name = 'Datadog'
      limit
        1
    ),
    'Co-founder & CEO'
  );





