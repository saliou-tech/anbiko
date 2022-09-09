import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public ville = ["Bamako","Kayes","Koulikoro","Sikasso","Ségou","Mopti","Tombouctou","Gao","Kidal","Menaka","Taoudénit",
  ]
  public list_to_return : string[] | undefined;


  // baseurl = 'http://loca:8080';
   baseurl = 'http://localhost:8080';
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

  ListToreturn(element : string): string[] | undefined{
    var list_bamako: string[]=[ "I","II","III","IV","V","VI",]
    var list_Kayes: string[]=[ "Bafoulabé","Diéma","Kita","Kaniéba","Kayes","Nioro du sahel","Yélimané"]
    var list_Koulikoro: string[]=[ "Banamba","Dioila","Kangaba","Koulikoro","Kolokani","Kati","Nara"]
    var list_Sikasso: string[]=[ "Bougouni", "Kolondiéba", "Kadiolo", "Koutiala", "Sikasso", "Yanfolila", "Yorosso"]
    var list_Segou: string[]=["Bla", "Baraouéli", "Macina", "Niono", "Ségou", "San", "Tominia"]
    var list_Mopti: string[]=[ "Bandiagara", "Bankass", "Djenné", "Douentza", "Koro", "Mopti", "Ténenkou", "Youwarou"]
    var list_Tombouctou: string[]=["Diré", "Goundam", "Gourma", "Rharous", "Niafunké", "Tombouctou"]
    var list_Gao: string[]=["Ansongo", "Gao", "Bourem", "Menaka",]
    var list_Kidal: string[]=["Abeïbara", "Kidal", "Tessalit", "Tin-Essako",]
    var list_Menaka: string[]=[ "Menaka", "Andéramboukane", "Inékar", "Tidermène",]
    var list_Taoudenit: string[]=["Achourat", "Arawane", "Al-Ourche", "Boujbeha", "Foum-Alba", "Taoudénit",]
    if(element ==="Bamako"){
      this.list_to_return=list_bamako;
      return this.list_to_return;
    }
    if(element ==="Bamako"){
      this.list_to_return=list_bamako;
      return this.list_to_return;
    }
    else if(element ==="Kayes"){
      this.list_to_return=list_Kayes;
      return this.list_to_return;
    }
    else if(element ==="Koulikoro"){
      this.list_to_return=list_Koulikoro;
      return this.list_to_return;
    }
    else if(element ==="Sikasso"){
      this.list_to_return=list_Sikasso;
      return this.list_to_return;
    }
   else if(element ==="Ségou"){
      this.list_to_return=list_Segou;
      return this.list_to_return;
    }
   else if(element ==="Mopti"){
      this.list_to_return=list_Mopti;
      return this.list_to_return;
    }
   else if(element ==="Tombouctou"){
      this.list_to_return=list_Tombouctou;
      return this.list_to_return;
    }
    else if(element ==="Gao"){
      this.list_to_return=list_Gao;
      return this.list_to_return;
    }
    else if(element ==="Kidal"){
      this.list_to_return=list_Kidal;
      return this.list_to_return;
    }
   else if(element ==="Menaka"){
      this.list_to_return=list_Menaka;
      return this.list_to_return;
    }
   else  if(element ==="Taoudénit"){
      this.list_to_return=list_Taoudenit;
      return this.list_to_return;
    }
   else{
     return this.list_to_return
    }


  }

  public addMember(membre : any): Observable<any> {
    console.log(membre);
    return this.http.post(this.baseurl + '/membre/save/', membre);
  }


  public readMembres(): Observable<any> {
    console.log();
    return this.http.get(this.baseurl + '/membre/all', { headers: this.httpHeaders });
  }
}
