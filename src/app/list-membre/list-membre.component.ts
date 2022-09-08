import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-membre',
  templateUrl: './list-membre.component.html',
  styleUrls: ['./list-membre.component.css']
})


export class ListMembreComponent implements OnInit, OnChanges {
  displayedColumns: (string | undefined)[] = ['id', 'nom', 'prenom', 'ville', 'commune', 'telephone'];
  villes: String[] | undefined;
  communes: String[] | undefined;
  showSpinner=false;
  erroField=false;
  membre: any
  listmembre: any;
  dataSource : any;
  loading=false;
  isNameNotValid=false;
  isPrenomNotValid=false;
  isVilleNotValid=false;
  isCommuneNotValid=false;
  isTelephoneNotValid=false;
  isErrorField=false;
  messageField= String;

  message: string | undefined;


  constructor(private userservice: UserService,private snackBar: MatSnackBar) {
  }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;


  /*dataSource = new MatTableDataSource(
    [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
  );
*/

  ngOnInit(): void {
    this.villes=this.userservice.ville
    this.membre={
      nom: '',
      prenom: '',
      ville: '',
      commune: '',
      telephone: ''
    }


    this.communes=this.userservice.ListToreturn(this.membre.ville);
    console.log(this.communes);
    this.getArticles();

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    this.communes=this.userservice.ListToreturn(this.membre.ville);
    console.log(this.communes);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeState(event :Event){
    console.log(event)
    this.communes=this.userservice.ListToreturn(this.membre.ville);
    console.log(this.communes);


  }
  openSnackBar(message: string, action: string,className: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: [className]


    })
    ;
  }
  ajouterMembres() {
    console.log(this.membre);
    this.loading = true;
    this.showSpinner=false;

    if(this.membre.nom===null ||this.membre.nom.length<3 ){
      this.isNameNotValid =true;
      this.isErrorField=this.isNameNotValid;
      this.messageField="le nom ne doit pas etre nul ou invalide";
    }else  if(this.membre.prenom===null ||this.membre.prenom.length<3 ){
      this.isPrenomNotValid =true;
      this.isErrorField=this.isPrenomNotValid;
      this.messageField="le prenom ne doit pas etre nul ou invalide";
    }
    else  if(this.membre.ville===null ||this.membre.ville.length<3 ){
      this.isVilleNotValid =true;
      this.isErrorField=this.isVilleNotValid;
      this.messageField="la ville ne doit pas etre nulle ou invalide";
    }
    else  if(this.membre.commune===null ||this.membre.commune.length<3 ){
      this.isCommuneNotValid =true;
      this.isErrorField=this.isCommuneNotValid;
      this.messageField="la commune ne doit pas etre nulle ou invalide";

    }
    else  if(this.membre.telephone===null ||this.membre.telephone.length<3 ){
      this.isTelephoneNotValid =true;
      this.isErrorField=this.isTelephoneNotValid;
      this.messageField="le numéro de telephone ne doit pas etre nul ou invalide";

    }
    else{
      this.isErrorField=false;
      this.messageField='';
      this.userservice.addMember(this.membre).subscribe(
        (data: any) => {
          console.log(data)
          this.loading = true;
          // @ts-ignore
          $('#exampleModal').modal('hide');
          this.openSnackBar("membre ajouter avec sucees ", "close",'green-snackbar')
          //JSON.stringify(this.currentUser.data)
        //  localStorage.setItem('user',JSON.stringify(this.currentUser))

      this.ngOnInit();
         // this.router.navigate(['liste-membre']);
        },(error: any) => {
          console.log('error', error.error.message);
          this.isErrorField=true
          this.messageField =error.error.message
          this.showSpinner=false;

        }

      )

    }


  }
 /* ajouterMembres() {

      this.loading = true;
      if (!this.membre.nom ) {
        this.isPasswordEmpty = true;
        console.log(this.isPasswordEmpty);
      }
      else if (!this.membre.prenom ) {
        this.isPasswordShort = true;
        console.log(this.isPasswordShort );

      }
    else if (!this.membre.ville ) {
      this.isPasswordShort = true;
      console.log(this.isPasswordShort );

    }
      else if (!this.membre.commune ) {
        this.isPasswordShort = true;
        console.log(this.isPasswordShort );

      }else{
        this.userservice.addMember(this.membre).subscribe(
          (data: any) => {
            console.log(data)
            this.currentUser={
              data:data,
              nom:this.userLogin.username,

            }
            this.openSnackBar("Connexion reussi", "")
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
*/


 // }

  getArticles(){
    this.userservice.readMembres().subscribe(
      data => {
        this.listmembre = data;

        console.log( "listarticles" ,this.listmembre);

        this.dataSource = new MatTableDataSource(this.listmembre);
        console.log( "les donnnes",this.dataSource)
        // @ts-ignore
        this.dataSource.paginator = this.paginator

      },
      error => {
        console.log('error', error);
      })

  }
}
