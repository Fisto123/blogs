import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmemtComponent } from './entertainmemt.component';

describe('EntertainmemtComponent', () => {
  let component: EntertainmemtComponent;
  let fixture: ComponentFixture<EntertainmemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
