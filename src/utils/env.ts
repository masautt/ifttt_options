import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../.env") })

export const IFTTT_EMAIL = process.env.IFTTT_EMAIL;
export const IFTTT_PASSWORD = process.env.IFTTT_PASSWORD;
export const IFTTT_USERNAME = process.env.IFTTT_USERNAME;

export const IFTTT_LOGIN_URL = process.env.IFTTT_LOGIN_URL;
export const IFTTT_APPLETS_URL = process.env.IFTTT_APPLETS_URL;