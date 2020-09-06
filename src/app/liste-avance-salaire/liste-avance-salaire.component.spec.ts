import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAvanceSalaireComponent } from './liste-avance-salaire.component';

describe('ListeAvanceSalaireComponent', () => {
  let component: ListeAvanceSalaireComponent;
  let fixture: ComponentFixture<ListeAvanceSalaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAvanceSalaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAvanceSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
