import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailerService {
  contact: any;

  constructor(private http: Http) { }

  sendMail(contact){

    console.log('Hello from sendMail!');

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('contacts/sendmail', contact, {headers: headers})
      .map(res => res.json());

  }

}
