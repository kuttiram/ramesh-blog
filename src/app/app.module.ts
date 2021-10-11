import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { MultiCardComponent } from './components/multi-card/multi-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SideWidgetComponent } from './components/side-widget/side-widget.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    HomeLandingComponent,
    HomeBannerComponent,
    MultiCardComponent,
    PaginationComponent,
    FooterComponent,
    CategoriesComponent,
    SideWidgetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
