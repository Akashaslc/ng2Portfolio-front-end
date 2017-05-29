import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { MailerService } from '../services/mailer.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: String;
  email: String;
  textarea: String;

  constructor(
    private validateService: ValidateService,
    private mailerService: MailerService,
    private flashMessage: FlashMessagesService,
  ) {
   }

  ngOnInit() {
  }

  onSubmit() {
    const contact = {
      name: this.name,
      email: this.email,
      textarea: this.textarea
    }
    this.mailerService.submitMessage(contact).subscribe(data => {
      console.log(data);
      if(data) {
        this.flashMessage.show('Message Sent!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Could not send.', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }
}
