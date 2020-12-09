import { MessageResponseBody } from "../handler/message-response";
import { MessageUtil } from "../handler/message-util";
import { Person } from "../model/person";
import { PersonService } from "../service/person-service";

export class PersonController{
    constructor(private personService: PersonService){ }
    
    async getPerson(_event: any): Promise<MessageResponseBody> {
      try {
        const result = await this.personService.getPerson();
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
        return MessageUtil.error(err.code, err.message);
      }
    }
}


