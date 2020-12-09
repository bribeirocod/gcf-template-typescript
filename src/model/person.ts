export class Person{
    id:string
    firstName:string
    lastName: string
    email:string
    password: string
    phoneNumber:string
    dateBirth: string
    gender: string

	constructor(id: string, firstName: string, lastName: string, email: string, password:string, phoneNumber: string, dateBirth: string, gender: string) {
        this.id=id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phoneNumber = phoneNumber
        this.dateBirth = dateBirth
        this.gender = gender
	} 
}