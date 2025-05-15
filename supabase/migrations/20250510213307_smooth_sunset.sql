/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `service` (text)
      - `message` (text)
      - `additional_info` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for anonymous users to insert data with validation checks
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Enable insert for service role only" ON demo_requests;

-- Create new policy for authenticated users
CREATE POLICY "Enable insert for authenticated users" 
  ON demo_requests
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Create policy for anonymous users with validation
CREATE POLICY "Allow anonymous insert with validation" 
  ON demo_requests
  FOR INSERT 
  TO anon
  WITH CHECK (
    -- Validate email format
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    -- Limit field lengths for security
    length(name) BETWEEN 1 AND 100 AND
    length(email) BETWEEN 5 AND 100 AND
    length(company) BETWEEN 1 AND 100 AND
    length(service) BETWEEN 1 AND 100 AND
    length(message) BETWEEN 1 AND 1000 AND
    (additional_info IS NULL OR length(additional_info) <= 1000)
  );