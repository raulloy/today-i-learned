import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twcqeqtznvvjcvvntwxh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3Y3FlcXR6bnZ2amN2dm50d3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0MDg4NDEsImV4cCI6MTk5ODk4NDg0MX0.dKfCRy1Lq_Sp3zY2hXHKBS2ivhxqHAROA8W5sD1x6ic';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl, supabaseKey, supabase };
