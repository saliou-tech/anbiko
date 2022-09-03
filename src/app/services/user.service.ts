import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public ville = ["Bamako","Kayes","Koulikoro","Sikasso","Ségou","Mopti","Tombouctou","Gao","Kidal","Menaka","Taoudénit",
  ]
  public list_to_return =[];


   baseurl = 'http://localhost:8083';
  // baseurl = 'http://localhost:8080';
  //baseurl =  'https://api-mouride-style-authentique.herokuapp.com'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }


  public signUp(user :any ): Observable<any> {
    console.log(user);
    return this.http.post(this.baseurl + '/api/client/register', user);
  }

  // for connexion
  public signIn(user : any): Observable<any> {
    console.log(user);
    return this.http.post(this.baseurl + '/auth/login/', user);
  }

  public ListToreturn(element : string){
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_Kayes=[ "Bafoulabé","Diéma","Kita","Kaniéba","Kayes","Nioro du sahel","Yélimané"]
    var list_bamako=[ "Banamba","Dioila","Kangaba","Koulikoro","Kolokani","Kati","Nara"]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
    var list_bamako=[ "I","II","III","IV","V","VI",]
  }
}
