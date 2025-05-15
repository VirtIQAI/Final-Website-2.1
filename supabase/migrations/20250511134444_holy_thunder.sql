/*
  # Fix contact_requests RLS policies

  1. Changes
    - Drop existing policies that might be conflicting
    - Create new policies with proper permissions for both anonymous and authenticated users
    - Maintain all existing validation rules
  
  2. Security
    - Enable RLS (already enabled)
    - Add policies for both anonymous and authenticated users
    - Keep existing validation rules for data integrity
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous insert with validation" ON contact_requests;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON contact_requests;

-- Create new unified insert policy with validation
CREATE POLICY "Enable inserts with validation" ON contact_requests
FOR INSERT TO public
WITH CHECK (
  -- Email format validation
  email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  -- Length validations
  AND (length(first_name) >= 1 AND length(first_name) <= 100)
  AND (length(last_name) >= 1 AND length(last_name) <= 100)
  AND (length(email) >= 5 AND length(email) <= 100)
  AND (length(phone) >= 5 AND length(phone) <= 50)
  AND (length(website) >= 5 AND length(website) <= 200)
  AND (company IS NULL OR length(company) <= 100)
  AND (message IS NULL OR length(message) <= 1000)
);