import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.css']
})
export class DialogContactComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<DialogContactComponent>) { }

  ngOnInit() {
  }

  onCloseClick() : void {
    // document.getElementById("dialog_message").innerText = "Mail Sent!";
    this.dialogRef.close();
  }

}
