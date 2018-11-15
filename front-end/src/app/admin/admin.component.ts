import { AuthService } from './../auth/auth.service';
import { GhostService } from './../shared/services/ghost.service';
import { Component, OnInit, OnDestroy, Inject, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  minimized = false;
  constructor(private router: Router, private ghostService: GhostService, public dialog: MatDialog, private authService: AuthService, private cdRef: ChangeDetectorRef) {
  }
  ghostSubscription: Subscription;
  ghostStatus: boolean;
  ngOnInit() {
    this.ghostSubscription = this.ghostService.ghostStatusObservable.subscribe(status => {
      console.log(status);
      this.ghostStatus = status;
      this.cdRef.detectChanges();
    });
    this.ghostService.getStatus();
  }

  toggleMenu() {
    this.minimized = !this.minimized;
  }

  ngOnDestroy() {
    this.ghostSubscription.unsubscribe();
  }

  logout(stepper: MatStepper) {
    const dialogRef = this.dialog.open(LogoutConfirmation, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
      }
    });
  }
}

@Component({
  selector: 'logout-confirmation',
  templateUrl: 'logout-confirmation.html'
})
export class LogoutConfirmation {
  constructor(public dialogRef: MatDialogRef<LogoutConfirmation>, @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
