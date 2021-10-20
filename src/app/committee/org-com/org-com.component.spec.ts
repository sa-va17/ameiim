import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgComComponent } from './org-com.component';

describe('OrgComComponent', () => {
  let component: OrgComComponent;
  let fixture: ComponentFixture<OrgComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
