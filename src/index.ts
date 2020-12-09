import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { PersonController } from './controller/person-controller';
import { PersonService } from './service/person-service';

export const handlerPerson: HttpFunction = (req, res) => {

  const controller = new PersonController(new PersonService);
  res.send(controller.getPerson(req));
};
