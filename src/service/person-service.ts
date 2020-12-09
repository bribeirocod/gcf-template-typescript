import { Person } from "../model/person";

export class PersonService {
  public async getPerson(): Promise<Person> {
    return {
      id: "13bfe042-3203-4e30-9532-a2bc2d7da18f",
      firstName: "Bruno",
      lastName: "Ribeiro",
      email: "bruno.ribeiro@grupoboticario.com.br",
      password: "123",
      phoneNumber: "011999999999",
      dateBirth: "1992-10-18",
      gender: "Masculino"
    };
  }
}
