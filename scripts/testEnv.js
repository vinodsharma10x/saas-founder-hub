const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });


console.log('vinod');
console.log(__dirname);
console.log(path.resolve(__dirname, '.env.local') );
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Is set' : 'Is not set');
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);
