import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialesListComponent } from './historiales-list.component';

describe('HistorialesListComponent', () => {
  let component: HistorialesListComponent;
  let fixture: ComponentFixture<HistorialesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
