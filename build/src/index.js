"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerPerson = void 0;
const person_controller_1 = require("./controller/person-controller");
const person_service_1 = require("./service/person-service");
const handlerPerson = (req, res) => {
    const controller = new person_controller_1.PersonController(new person_service_1.PersonService);
    res.send(controller.getPerson(req));
};
exports.handlerPerson = handlerPerson;
//# sourceMappingURL=index.js.map