import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
})
export class AddblogComponent {
  myForm!: FormGroup;
  dataForm!: any;
  constructor(
    public fb: FormBuilder,
    private service: NewsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(120),
        ],
      ],
      details: ['', [Validators.required]],
      categories: ['', [Validators.required]],
      trending: ['', [Validators.required]],
      cover: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
  }
  get fc() {
    return this.myForm.controls;
  }
  submitForm(data: any) {
    if (this.myForm.valid) {
      this.service.postNews(data).subscribe((item) => {
        this.dataForm = item;
        if (this.dataForm !== null) {
          this.router.navigate(['']);
        } else {
          alert('failed');
        }
      });
    }
  }
}
