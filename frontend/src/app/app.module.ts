import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { LatestComponent } from './components/latest/latest.component';
import { SportComponent } from './components/sport/sport.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { EntertainmemtComponent } from './components/entertainmemt/entertainmemt.component';
import { BusinessComponent } from './components/business/business.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './pages/auth/auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Tokeninterceptor } from './tokeninterceptor.interceptor';
import { SingleNewsComponent } from './pages/single-news/single-news.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './pages/admin/admin.module';
import { SinglecategoryComponent } from './pages/singlecategory/singlecategory.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouteReuseStrategy } from '@angular/router/';
import { NotfoundComponent } from './pages/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    LatestComponent,
    SportComponent,
    PoliticsComponent,
    EntertainmemtComponent,
    BusinessComponent,
    SpecialsComponent,
    FooterComponent,
    SingleNewsComponent,
    SinglecategoryComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Tokeninterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
