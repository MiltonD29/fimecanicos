import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariosListComponent } from './inventarios-list.component';

describe('InventariosListComponent', () => {
  let component: InventariosListComponent;
  let fixture: ComponentFixture<InventariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
