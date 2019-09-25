import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotecComponent } from './memotec.component';

describe('MemotecComponent', () => {
  let component: MemotecComponent;
  let fixture: ComponentFixture<MemotecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemotecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemotecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
