import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmprofileComponent } from './fmprofile.component';

describe('FmprofileComponent', () => {
  let component: FmprofileComponent;
  let fixture: ComponentFixture<FmprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
