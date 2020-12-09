"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const message_util_1 = require("../handler/message-util");
class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    async getPerson(_event) {
        try {
            const result = await this.personService.getPerson();
            return message_util_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_util_1.MessageUtil.error(err.code, err.message);
        }
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=person-controller.js.map