export const config = {
  env: process.env.NODE_ENV,
  logLevel: process.env.SERVER_LOG_LEVEL,
  port: process.env.SERVER_PORT,
  db_host: process.env.POSTGRES_HOST,
  db_port: process.env.POSTGRES_PORT,
  db_user: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASSWORD,
  db_name: process.env.POSTGRES_DB
};