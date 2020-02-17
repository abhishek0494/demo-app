import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery=[]
  constructor(private http:HttpClient,public dialog: MatDialog) { }

  ngOnInit(){
    this.http.get('https://api.pexels.com/v1/search?query=adventure&per_page=20&page=1',{
      headers:{
        Authorization:`563492ad6f917000010000016e1e19be60cc4c199200efbfd3258dee`
      }
    }).subscribe(images=>{
      this.gallery=images['photos']
      console.log(this.gallery)
    })
  }
  openDialog(data): void {
    const dialogRef = this.dialog.open(imageViewDialog, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'imageviewer.html',
})
export class imageViewDialog {

  constructor(
    public dialogRef: MatDialogRef<imageViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}