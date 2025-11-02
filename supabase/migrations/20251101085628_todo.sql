CREATE TABLE todos (
  id VARCHAR(50) PRIMARY KEY,        -- client-generated ID
  user_id VARCHAR(255) NOT NULL,     -- from Clerk
  title VARCHAR(100) NOT NULL,       -- todo text
  is_completed BOOLEAN NOT NULL,     -- true/false from client
  created_at VARCHAR(50) NOT NULL      -- client-passed timestamp
);

