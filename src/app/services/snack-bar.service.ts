import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent, SnackType } from '../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string, snackType: SnackType) {
    const _snackType: SnackType =
      snackType !== undefined ? snackType : "success";

    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: _snackType,
      data: { message: message, snackType: _snackType }
    });
  }
}