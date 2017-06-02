import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { ValidateService } from '../services/validate.service';
import { MailerService } from '../services/mailer.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  name: String;
  email: String;
  textarea: String;

  constructor(
    private validateService: ValidateService,
    private mailerService: MailerService,
    private flashMessage: FlashMessagesService
  ){ }

  ngOnInit() {
  }

  onSubmit() {
    const contact = {
      name: this.name,
      email: this.email,
      textarea: this.textarea
    }

    console.log('Hello from onSubmit!');

    this.mailerService.sendMail(contact).subscribe(data => {

    });
    this.contactForm.reset();
  }
}
