
import { MessageResponseBody } from "./message-response";
import { Result } from "./message-result";
export class MessageUtil {
    static success(data: object): MessageResponseBody {
        const result = new Result(StatusCodeEnum.success, 0, 'success', data);

        return result.bodyToString();
    }

    static error(code = 1000, message: string): MessageResponseBody {
        const result = new Result(StatusCodeEnum.error, code, message);

        console.log(result.bodyToString());
        return result.bodyToString();
    }
    
}