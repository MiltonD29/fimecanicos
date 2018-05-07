import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionListComponent } from './revision-list.component';

describe('RevisionListComponent', () => {
  let component: RevisionListComponent;
  let fixture: ComponentFixture<RevisionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
