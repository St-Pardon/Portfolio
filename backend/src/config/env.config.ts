import * as dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORTTER;
export const MONGO_URI = process.env.MONGODB_URI!;
console.log(MONGO_URI);
