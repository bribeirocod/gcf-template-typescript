export class MessageResponseBody{
    statusCode: number;
    body: string;

    constructor(statusCode: number, body: string){
        this.body = body
        this.statusCode = statusCode
    }

}