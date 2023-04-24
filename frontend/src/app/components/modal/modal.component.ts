import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'hin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  updateForm!: FormGroup;
  userForm!: any;
  dataForm!: any;
  id!: number;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private service: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {}
  ngOnInit(): void {
    this.getUserDetails(this.data.id);
    this.reactiveForm();
  }
  reactiveForm() {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      isAdmin: ['', [Validators.required]],
    });
  }
  get fc() {
    return this.updateForm.controls;
  }

  getUserDetails(data: number) {
    this.service.getUser(data).subscribe((item) => {
      this.userForm = item;
    });
  }
  updateUser(data: any) {
    this.service.updateUser(data, this.userForm._id).subscribe((data) => {
      this.dialogRef.close();
      this.service.getAllUsers().subscribe((users) => {
        window.location.reload();
      });
    });
  }
  onClose() {
    this.dialogRef.close();
  }
}
