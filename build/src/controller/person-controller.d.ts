import { MessageResponseBody } from "../handler/message-response";
import { PersonService } from "../service/person-service";
export declare class PersonController {
    private personService;
    constructor(personService: PersonService);
    getPerson(_event: any): Promise<MessageResponseBody>;
}
