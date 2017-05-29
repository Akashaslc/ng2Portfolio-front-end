import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailerService {
  contact: any;

  constructor(private http: Http) { }

  public submitMessage(contact) {
    return this.http.post(`http://localhost:3000/sendmail`, contact, null).map(res => res.json());
  }
}
