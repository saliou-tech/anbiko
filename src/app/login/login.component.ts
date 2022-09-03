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
  isAdmin: any;
  userLogin: any;
  currentUser: any;
  loading = false;

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
    if (!this.userLogin.password ) {
      this.isPasswordEmpty = true;
      console.log(this.isPasswordEmpty);
    }
    else if ( this.userLogin.password.length < 1) {
      this.isPasswordShort = true;
      console.log(this.isPasswordShort );

    }else{
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
            this.loading = true;
          this.router.navigate(['liste-membre']);
        },
          (error: { status: number; }) => {
        console.log('error', error);
        if(error.status==200){

        }

      }

      )
    }


  }

}
