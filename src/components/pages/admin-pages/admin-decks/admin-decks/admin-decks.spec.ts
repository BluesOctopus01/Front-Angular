import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDecks } from './admin-decks';

describe('AdminDecks', () => {
  let component: AdminDecks;
  let fixture: ComponentFixture<AdminDecks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDecks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDecks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
