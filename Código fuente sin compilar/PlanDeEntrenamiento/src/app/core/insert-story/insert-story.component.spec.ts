import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStoryComponent } from './insert-story.component';

describe('InsertStoryComponent', () => {
  let component: InsertStoryComponent;
  let fixture: ComponentFixture<InsertStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertStoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
