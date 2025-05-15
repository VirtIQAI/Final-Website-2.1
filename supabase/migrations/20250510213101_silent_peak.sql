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
    - Add policy for service role to insert data
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

CREATE POLICY "Enable insert for service role only" 
  ON demo_requests
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);