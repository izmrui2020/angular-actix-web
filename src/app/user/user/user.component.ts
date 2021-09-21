import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDialogComponent } from './user.component.dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dialogData: DialogData = {
    name: '',
    animal: '',
  };

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      height: '600px',
      data: this.dialogData,
    });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log('dialog was closed:', result);
      }
    )
  }


  ngOnInit(): void {
  }

  openBottomSheet(): void {

  }

}
