-- Run this script in pgAdmin4 Query Tool to create the database
-- Or execute it using: psql -U postgres -f create_database.sql

CREATE DATABASE ecap_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE ecap_db IS 'Ecap application database';
