/*
  # Initial Portfolio Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
    
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `tags` (text array) - Technology tags
      - `image_url` (text) - Project image URL
      - `source_url` (text, nullable) - GitHub or source code URL
      - `demo_url` (text, nullable) - Live demo URL
      - `order` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on both tables
    - Public read access for projects (portfolio display)
    - Contact submissions are write-only for public users
    - No policies allow reading contact submissions (admin only via dashboard)
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tags text[] DEFAULT '{}',
  image_url text NOT NULL,
  source_url text,
  demo_url text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Contact submissions: anyone can insert (for contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Projects: public read access for portfolio display
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create index for project ordering
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects("order");