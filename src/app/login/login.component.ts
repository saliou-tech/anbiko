import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isPasswordShort = false;
  isPasswordEmpty = false;
  error: any ;
  erroField=false;
  isAdmin: any;
  userLogin: any;
  currentUser: any;
  loading = false;
  isUsernameShort=false;
  showSpinner=false;
  success :any;
  message : string | undefined;
  constructor(private router: Router,private userservice :UserService,private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.userLogin={
      username:'',
      password:''
    }


  }
  openSnackBar(message: string, action: string,className: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]


    });
  }

  logAdmin(){
    this.loading = true;
    this.showSpinner=true;
   /*if ( true) {
      this.isUsernameShort = true;
      console.log(this.isPasswordShort );}
   else if (true ) {
      this.isPasswordEmpty = true;
      console.log(this.isPasswordEmpty);
    }

    else if ( this.userLogin.password.length < 1) {
      this.isPasswordShort = true;
      console.log(this.isPasswordShort );

    }*/
      this.userservice.signIn(this.userLogin).subscribe(
          (data: any) => {
          console.log(data)
            this.currentUser={
              data:data,
              nom:this.userLogin.username,

            }
            this.openSnackBar("Connexion reussi", "close","green-snackbar")
          //JSON.stringify(this.currentUser.data)
          localStorage.setItem('user',JSON.stringify(this.currentUser))
            this.loading = false;
            this.showSpinner=false;

            this.router.navigate(['liste-membre']);
        },
          (error:any) => {
            this.erroField=true;
        console.log(error.error.errors[0].message);
        this.message = error.error.errors[0].message;
            this.showSpinner=false;



          }

      )



  }

}
