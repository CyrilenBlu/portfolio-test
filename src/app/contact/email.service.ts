import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};

@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmailService {
  apiUrl : string = 'http://localhost:3000/api/v1';

  constructor(private http : HttpClient) { }

  public sendMail(email, subject, message) {
    console.log("Sending Mail: ", email, subject, message);
    const body = {
      email: email,
      subject: subject,
      message: message
    };
    return this.http.post(`${this.apiUrl}/sendmail`, body, httpOptions)
      .pipe(
        catchError( err => {
          return throwError(err);
        })
      );
  }
}
