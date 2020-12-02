import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutqComponent } from './aboutq.component';

describe('AboutqComponent', () => {
  let component: AboutqComponent;
  let fixture: ComponentFixture<AboutqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
