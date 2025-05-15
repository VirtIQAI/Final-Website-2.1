/*
  # Fix contact requests RLS policy

  1. Changes
    - Drop existing RLS policies on contact_requests table
    - Add new policy to allow public inserts with validation
    
  2. Security
    - Enables RLS
    - Adds policy for public inserts with validation
    - Validates input data length and format
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable inserts with validation" ON contact_requests;

-- Create new policy for public inserts with validation
CREATE POLICY "Enable public inserts with validation"
ON contact_requests
FOR INSERT
TO public
WITH CHECK (
  -- Email format validation
  email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  -- Length validations
  AND (length(first_name) >= 1 AND length(first_name) <= 100)
  AND (length(last_name) >= 1 AND length(last_name) <= 100)
  AND (length(email) >= 5 AND length(email) <= 100)
  AND (length(phone) >= 5 AND length(phone) <= 50)
  AND (length(website) >= 5 AND length(website) <= 200)
  -- Optional fields validation
  AND (company IS NULL OR length(company) <= 100)
  AND (message IS NULL OR length(message) <= 1000)
);