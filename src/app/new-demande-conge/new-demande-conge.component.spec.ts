import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeCongeComponent } from './new-demande-conge.component';

describe('NewDemandeCongeComponent', () => {
  let component: NewDemandeCongeComponent;
  let fixture: ComponentFixture<NewDemandeCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDemandeCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
