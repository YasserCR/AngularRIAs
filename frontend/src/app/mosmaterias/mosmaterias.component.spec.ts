import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosmateriasComponent } from './mosmaterias.component';

describe('MosmateriasComponent', () => {
  let component: MosmateriasComponent;
  let fixture: ComponentFixture<MosmateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosmateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosmateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
