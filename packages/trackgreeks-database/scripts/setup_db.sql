CREATE USER app PASSWORD <ENTER_SECURE_RANDOM_PASSWORD_HERE>;

GRANT USAGE ON SCHEMA public TO app;
GRANT SELECT, INSERT, UPDATE, DELETE  ON ALL TABLES IN SCHEMA public TO app;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app;

GRANT SELECT, USAGE ON ALL SEQUENCES IN SCHEMA public TO app;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, USAGE ON SEQUENCES TO app;
