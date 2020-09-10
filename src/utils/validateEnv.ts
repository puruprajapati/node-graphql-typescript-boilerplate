import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    JWT_SECRET: str(),
    APP_HOST: str(),
    APP_PORT: port(),
    DB_CLIENT: str(),
    DB_HOST: str(),
    DB_PORT: port(),
    DB_NAME: str(),
    DB_PASSWORD: str(),
  });
}

export default validateEnv;
