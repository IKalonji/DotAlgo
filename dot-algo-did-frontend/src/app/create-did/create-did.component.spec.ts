import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDidComponent } from './create-did.component';

describe('CreateDidComponent', () => {
  let component: CreateDidComponent;
  let fixture: ComponentFixture<CreateDidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
