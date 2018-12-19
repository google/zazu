import { HttpClient } from '@angular/common/http';
import { ViewerService } from 'src/app/shared/services/viewer.service';
import { GhostService } from './../../shared/services/ghost.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit, OnDestroy {
  constructor(
    private ghostService: GhostService,
    private router: Router,
    private route: ActivatedRoute,
    private viewerService: ViewerService,
    private http: HttpClient,
    public snackBar: MatSnackBar,
  ) {}
  sub: any;
  name: string;
  userID: string;
  viewer;
  orgID: string;
  companyName;
  async ngOnInit() {
    this.ghostService.activatedGhost();
    try {
      this.sub = this.route.params.subscribe(params => {
        this.name = params['userName'];
        this.userID = params['userID'];
        this.orgID = params['id'];
      });
      await this.viewerService.initialSet(this.userID);
      const call = await (<any>this.http.get('../../assets/main-variables.json').toPromise());
      this.companyName = call.companyName;
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 5000,
      });
    }
  }

  disableGhost() {
    this.ghostService.disableGhost();
    if (this.orgID) {
      this.router.navigate(['admin/o/' + this.orgID + '/u/' + this.userID]);
    } else {
      this.router.navigate(['admin/users/u/' + this.userID]);
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.ghostService.disableGhost();
  }
}
