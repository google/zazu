import { HttpClient } from '@angular/common/http';
import { ViewerService } from './../shared/services/viewer.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogoutConfirmation } from '../admin/admin.component';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  constructor(private authService: AuthService, public dialog: MatDialog, private viewerService: ViewerService,  private http: HttpClient) { }

  companyName;

  async ngOnInit() {
    await this.viewerService.initialSet('');
    const call = await <any> this.http.get('../../assets/main-variables.json').toPromise();
    this.companyName = call.companyName;
  }

  logout() {
    const dialogRef = this.dialog.open(LogoutConfirmation, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.authService.logout();
      }
    });
  }
}
