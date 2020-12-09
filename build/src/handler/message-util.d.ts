import { MessageResponseBody } from "./message-response";
export declare class MessageUtil {
    static success(data: object): MessageResponseBody;
    static error(code: number | undefined, message: string): MessageResponseBody;
}
