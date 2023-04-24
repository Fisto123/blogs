import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddblogComponent } from './addblog/addblog.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/components/admin/sidebar/sidebar.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [
    AddblogComponent,
    AdminhomeComponent,
    SidebarComponent,
    ViewusersComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
