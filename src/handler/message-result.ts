import { MessageResponseBody } from "./message-response";
export class Result {
    private statusCode: number;
  
    private code: number;
  
    private message: string;
  
    private data?: any;
  
    constructor(statusCode: number, code: number, message: string, data?: any) {
      this.statusCode = statusCode;
      this.code = code;
      this.message = message;
      this.data = data;
    }
    bodyToString(): MessageResponseBody {
        return {
          statusCode: this.statusCode,
          body: JSON.stringify({
            code: this.code,
            message: this.message,
            ...this.data,
          }),
        };
      }
}