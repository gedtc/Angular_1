import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDivididaComponent } from './tabla-dividida.component';

describe('TablaDivididaComponent', () => {
  let component: TablaDivididaComponent;
  let fixture: ComponentFixture<TablaDivididaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDivididaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDivididaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
