import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImcInfoDialog } from './imc-info-dialog.component';

describe('ImcInfoDialog', () => {
  let component: ImcInfoDialog;
  let fixture: ComponentFixture<ImcInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImcInfoDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ImcInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
