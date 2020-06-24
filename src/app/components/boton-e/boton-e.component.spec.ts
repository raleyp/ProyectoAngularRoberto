import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEComponent } from './boton-e.component';

describe('BotonEComponent', () => {
  let component: BotonEComponent;
  let fixture: ComponentFixture<BotonEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
