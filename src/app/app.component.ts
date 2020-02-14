import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UserName:''
  constructor(public dialog: MatDialog,private router: Router) {
    let User=JSON.parse(localStorage.getItem('user'))
    if(User&&User[0]['userid']){
      this.isUserLoggedIn=true;
      this.UserName=User[0].username
    }else{
      this.isUserLoggedIn=false
    }
   }
  title = 'demo-app';
  isUserLoggedIn=false
  usersDB= [
    {userid : "abc@media.com",password:"abc123","username":"tom"},
    {userid : "def@media.com",password:"def123","username":"dick"}
    ]
    openDialog(): void {
      const dialogRef = this.dialog.open(loginViewDialog, {
        width:'450px',
        data: this.usersDB
      });
  
      dialogRef.afterClosed().subscribe(result => {
if(result[0].userid){
  this.isUserLoggedIn=true;
  this.UserName=result[0].username
}
else
this.isUserLoggedIn=false
      });
    }
    logout(){
      localStorage.removeItem('user')
      this.isUserLoggedIn=false
      this.router.navigate(['/']);

    }
}
@Component({
  selector: 'login-overview-example-dialog',
  templateUrl: 'login.html',
  styleUrls: ['./app.component.scss']

})
export class loginViewDialog {
  email='';
  password=""
  constructor(
    public dialogRef: MatDialogRef<loginViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data,private _snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  login(){
    if(this.data.filter(element=>element.userid===this.email).length&&this.data.filter(element=>element.userid===this.email)[0].password===this.password){
      this._snackBar.open("Login Successful", "", {
        duration: 5000,
      });
      this.dialogRef.close(this.data.filter(element=>element.userid===this.email));
      localStorage.setItem('user',JSON.stringify(this.data.filter(element=>element.userid===this.email)));
    }else{
      this._snackBar.open("Login Failed! Please check username and password.", "", {
        duration: 5000,
      }); 
      this.dialogRef.close(null);
    }
  }

}