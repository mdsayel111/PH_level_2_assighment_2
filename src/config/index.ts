import * as dotenv from 'dotenv';
dotenv.config();

// export .env variable
export default {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
};
