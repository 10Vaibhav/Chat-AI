import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config();

export const apiKey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;

if(!apiKey || !apiSecret) {
    throw new Error("Missing required environment variables for STREAM_API_KEY & STREAM_API_SECRET");
}

export const serverClient = new StreamChat(apiKey, apiSecret);

