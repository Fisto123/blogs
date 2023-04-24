import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './guard/authguard.guard';
import { AdminGuard } from './guard/admin.guard';
import { SingleNewsComponent } from './pages/single-news/single-news.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { AddblogComponent } from './pages/admin/addblog/addblog.component';
import { ViewusersComponent } from './pages/admin/viewusers/viewusers.component';
import { SinglecategoryComponent } from './pages/singlecategory/singlecategory.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singleNews/:id',
    component: SingleNewsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminhomeComponent,
      },
      {
        path: 'add',
        title: 'add blog',
        component: AddblogComponent,
      },
      {
        path: 'viewusers',
        title: 'view user',
        component: ViewusersComponent,
        pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'singlecat/:cat',
    component: SinglecategoryComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
