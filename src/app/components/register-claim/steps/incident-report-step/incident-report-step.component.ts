import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Sinistro } from 'src/app/models/usuario.model';
import { SnackbarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-incident-report-step',
  templateUrl: './incident-report-step.component.html',
  styleUrls: ['./incident-report-step.component.scss']
})
export class IncidentReportStepComponent implements OnInit {
  uploadedImages = [];
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor(
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  get boEnviado() {
    return this.uploadedImages.length > 0;
  }

  onFileChange(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.snackbarService.openSnackBar("Selecione uma imagem!", "warn");
    } else {
      this.validateFile(event);
    }
  }

  deleteImg(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Apagar foto",
        description: "Deseja apagar a foto?",
      },
      width: "50%"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.uploadedImages.splice(index, 1);
      }
    });
  }
  
  validateFile(event: any) {
    const fileType = event.target.files[0].type;

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event: any) => {
      if (!(fileType === 'image/png' || fileType === 'image/jpeg')) {
        this.snackbarService.openSnackBar("Selecione apenas imagens JPG ou PNG!", "warn");
        return;
      }
      const image = new Image();
      image.src = _event.target.result;

      image.onload = (rs: any) => {
        let fileLogo = event.target.files[0];
        let src = reader.result;

        this.uploadedImages.push({
          src,
          fileLogo
        });
      }
    }
    return;
  }
}
