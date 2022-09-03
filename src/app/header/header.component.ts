import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNameUserExist=false;
  client_string: string | null | undefined;
  client={
    data:{
      currentUser:{
        id:'',
        username:'',
        nom:''
      }
    },
    nom:''
  }

  constructor() { }

  ngOnInit(): void {
    this.client_string = localStorage.getItem('user')
    // @ts-ignore
    this.client = JSON.parse(this.client_string)
    console.log("le client",this.client)
    if(this.client.nom){
      this.isNameUserExist=true;

    }
  }

}
