import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvComComponent } from './adv-com.component';

describe('AdvComComponent', () => {
  let component: AdvComComponent;
  let fixture: ComponentFixture<AdvComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
