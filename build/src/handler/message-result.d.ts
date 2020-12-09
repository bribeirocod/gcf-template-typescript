import { MessageResponseBody } from "./message-response";
export declare class Result {
    private statusCode;
    private code;
    private message;
    private data?;
    constructor(statusCode: number, code: number, message: string, data?: any);
    bodyToString(): MessageResponseBody;
}
