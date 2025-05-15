/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `website` (text, required)
      - `company` (text)
      - `message` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for anonymous users to insert with validation
    - Add policy for authenticated users to insert
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  website text NOT NULL,
  company text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert with validation"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text) AND
    ((length(first_name) >= 1) AND (length(first_name) <= 100)) AND
    ((length(last_name) >= 1) AND (length(last_name) <= 100)) AND
    ((length(email) >= 5) AND (length(email) <= 100)) AND
    ((length(phone) >= 5) AND (length(phone) <= 50)) AND
    ((length(website) >= 5) AND (length(website) <= 200)) AND
    ((company IS NULL) OR (length(company) <= 100)) AND
    ((message IS NULL) OR (length(message) <= 1000))
  );

CREATE POLICY "Enable insert for authenticated users"
  ON contact_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);