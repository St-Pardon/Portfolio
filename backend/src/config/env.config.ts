import * as dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORTTER;
export const MONGO_URI = process.env.MONGODB_URI!;
export const JWTSecret = process.env.JWTSecret;
