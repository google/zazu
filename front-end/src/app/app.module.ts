import { AuthGuard } from './auth/auth-guard.service';
import { PaginationService } from './shared/services/pagination.service';
import { AdminGuard } from './auth/admin-guard.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { UserService } from './shared/services/user.service';
import { ReportService } from './shared/services/report.service';
import { OrganizationService } from './shared/services/organization.service';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LogoutComponent } from './auth/logout/logout.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { RedirectComponent } from './auth/redirect/redirect.component';

@NgModule({
  declarations: [AppComponent, LoginComponent,  ViewerComponent, LogoutComponent, UnauthorizedComponent, RedirectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AdminGuard,
    UserService,
    ReportService,
    OrganizationService,
    PaginationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
