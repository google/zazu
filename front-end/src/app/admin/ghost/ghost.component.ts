import { ViewerService } from 'src/app/shared/services/viewer.service';
import { GhostService } from './../../shared/services/ghost.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit, OnDestroy {

  constructor(private ghostService: GhostService, private router: Router, private route: ActivatedRoute, private viewerService: ViewerService) { }
  sub: any;
  name: string;
  userID: string;
  viewer;
  orgID: string;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.name = params['userName'];
        this.userID = params['userID'];
        this.orgID = params['id'];
      });
      await this.viewerService.initialSet(this.userID);
      this.ghostService.activatedGhost();
    } catch (error) {
      console.log(error);
    }
  }

  disableGhost() {
    this.ghostService.disableGhost();
    if (this.orgID) {
      this.router.navigate(['admin/o/' + this.orgID + '/u/' + this.userID], { relativeTo: this.route });
    } else {
      this.router.navigate(['admin/users/u/' + this.userID], { relativeTo: this.route });
    }

  }

  ngOnDestroy(): void {
   if (this.sub) {
     this.sub.unsubscribe();
   }
   this.ghostService.disableGhost();
  }

}
