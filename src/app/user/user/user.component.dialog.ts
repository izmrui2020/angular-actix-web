import { Component, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'user-dialog-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserDialogComponent {

  //3.コンストラクターでDialogを参照するためのクラス(MatDialogRef<T>)をDI
　　　　//呼び出し元で設定したdataパラメータ(DialogData)を設定
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
