import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicemasaComponent } from './indicemasa.component';

describe('IndicemasaComponent', () => {
  let component: IndicemasaComponent;
  let fixture: ComponentFixture<IndicemasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicemasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicemasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
