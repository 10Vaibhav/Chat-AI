import OpenAI from "openai";
import type {Channel, DefaultGenerics, Event, StreamChat} from "stream-chat";
import type { AIAgent } from "../types";
import { OpenAIResponseHandler } from "./OpenAIResponseHandler";

export class OpenAIAgent implements AIAgent {
    private openai?: OpenAI;
    private assistant?: OpenAI.Beta.Assistants.Assistant;
    private openAiThread?: OpenAI.Beta.Threads.Thread;
    private lastInteractionTs = Date.now();

    private handlers: OpenAIResponseHandler[] = [];

    constructor(
        readonly chatClient: StreamChat,
        readonly channel: Channel
    ){}

}