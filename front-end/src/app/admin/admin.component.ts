import { GhostService } from './../shared/services/ghost.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  minimized = false;
  constructor(private route: Router, private ghostService: GhostService) {}
  ghostSubscription: Subscription;
  ghostStatus: boolean;
  ngOnInit() {
    this.ghostSubscription = this.ghostService.ghostStatusObservable.subscribe(
      status => {
        this.ghostStatus = status;
      }
    );
    this.ghostService.getStatus();
    this.route.navigate(['admin/o']);
  }

  toggleMenu() {
    this.minimized = !this.minimized;
    console.log('toggled');
  }

  ngOnDestroy() {
    this.ghostSubscription.unsubscribe();
  }
}
