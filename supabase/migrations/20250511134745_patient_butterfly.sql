/*
  # Fix contact requests RLS policy

  1. Changes
    - Drop existing policies
    - Create new policy for public inserts with validation
    - Make website optional
    - Make company required
    - Update field validations

  2. Security
    - Maintain email format validation
    - Keep length restrictions for all fields
    - Ensure required fields are properly validated
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable public inserts with validation" ON contact_requests;

-- Create new policy for public inserts with validation
CREATE POLICY "Enable public inserts with validation"
ON contact_requests
FOR INSERT
TO public
WITH CHECK (
  -- Email format validation
  email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  -- Required fields length validation
  AND (length(first_name) >= 1 AND length(first_name) <= 100)
  AND (length(last_name) >= 1 AND length(last_name) <= 100)
  AND (length(email) >= 5 AND length(email) <= 100)
  AND (length(phone) >= 5 AND length(phone) <= 50)
  AND (length(company) >= 1 AND length(company) <= 100)
  -- Optional fields validation
  AND (website IS NULL OR (length(website) >= 1 AND length(website) <= 200))
  AND (message IS NULL OR length(message) <= 1000)
);