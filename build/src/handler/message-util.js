"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUtil = void 0;
const message_result_1 = require("./message-result");
class MessageUtil {
    static success(data) {
        const result = new message_result_1.Result(StatusCodeEnum.success, 0, 'success', data);
        return result.bodyToString();
    }
    static error(code = 1000, message) {
        const result = new message_result_1.Result(StatusCodeEnum.error, code, message);
        console.log(result.bodyToString());
        return result.bodyToString();
    }
}
exports.MessageUtil = MessageUtil;
//# sourceMappingURL=message-util.js.map