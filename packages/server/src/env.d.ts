declare namespace NodeJS {
  interface ProcessEnv {
    REDIS_URL: string;
    PORT: string;
    API_URL: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
  }
}
