import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'hin-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css'],
})
export class ViewusersComponent {
  UserDetail!: any;
  dataSource!: any;
  constructor(private service: UserService, private dialog: MatDialog) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'email', 'admin', 'action'];
  // dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.service.getAllUsers().subscribe((users) => {
      this.UserDetail = users;
      this.dataSource = new MatTableDataSource(this.UserDetail);
      this.dataSource.paginator = this.paginator;
    });
  }
  update(id: number) {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        id,
      },
    });
  }
  delete(id: number) {
    this.service.deleteUser(id).subscribe((items) => {
      window.alert('deleted successfully');
      this.getAllUser();
    });
  }
}
