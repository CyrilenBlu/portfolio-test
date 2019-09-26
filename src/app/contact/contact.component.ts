import {Component, OnInit} from '@angular/core';
import {EmailService} from "./email.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {throwError} from "rxjs";
import {MatDialog} from "@angular/material";
import {DialogContactComponent} from "./dialog/dialog-contact.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService : EmailService, private router : Router, private dialog : MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {

    const eElement = (document.getElementById('email') as HTMLInputElement);
    const sElement = (document.getElementById('subject') as HTMLInputElement);
    const mElement = (document.getElementById('message') as HTMLInputElement);

    const email = eElement.value;
    const subject = sElement.value;
    const message = mElement.value;

    const checkForm : boolean = this.checkForm(email, subject, message);
    console.log(checkForm);
    if (!checkForm)
      return throwError("Incomplete form");

    this.emailService.sendMail(email, subject, message).subscribe((value : any) => {
      this.openDialog();
      document.getElementById("dialog_message").innerText = value.message;
      console.info('value', value);
      this.router.navigateByUrl('/')

      },
      (err: HttpErrorResponse) => {
      console.error("[ERROR] Success: [ " + err.error.success + " ]");
      console.error("[ERROR] Message: [ " + err.error.message + " ]");
      console.error("[ERROR] Server Response Message [ " + err.message + " ]");
      this.openDialog();
      document.getElementById("dialog_message").innerText = "Error Occurred! \n[" + err.error.message + "]";
      this.router.navigateByUrl('/');
      });
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(DialogContactComponent);
    dialogRef.updatePosition({
      top: '-10000%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    })
  }

  checkForm(email : string, subject : string, message : string) {
    const commonEmpty = "Please fill in ";
    let totalErrors : string = '';


    if (email == '')
      totalErrors = totalErrors + (commonEmpty + "Email\n");
    if (!email.includes('@'))
      totalErrors = totalErrors + ("Email missing @\n");

    if (subject == '')
      totalErrors = totalErrors + (commonEmpty + "Subject\n");

    if (message == '')
      totalErrors = totalErrors + (commonEmpty + "Message\n");

    if (totalErrors != '') {
      alert(totalErrors);
      return false;
    } else return true;
  }
}
