"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverClient = exports.apiSecret = exports.apiKey = void 0;
const stream_chat_1 = require("stream-chat");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.apiKey = process.env.STREAM_API_KEY;
exports.apiSecret = process.env.STREAM_API_SECRET;
if (!exports.apiKey || !exports.apiSecret) {
    throw new Error("Missing required environment variables for STREAM_API_KEY & STREAM_API_SECRET");
}
exports.serverClient = new stream_chat_1.StreamChat(exports.apiKey, exports.apiSecret);
//# sourceMappingURL=serverClient.js.map