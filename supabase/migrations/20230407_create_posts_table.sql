-- Create the posts table
CREATE TABLE IF NOT EXISTS posts (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO posts (title, content) VALUES
    ('Welcome to my blog!', 'This is my first post using Supabase and React.'),
    ('Getting Started with TanStack Query', 'TanStack Query makes it easy to manage server state in React applications.'),
    ('Building with Supabase', 'Supabase provides a powerful backend-as-a-service solution for modern web apps.'),
    ('React Best Practices', 'Here are some tips for writing better React applications...');