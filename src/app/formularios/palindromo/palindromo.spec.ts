import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palindromo } from './palindromo';

describe('Palindromo', () => {
  let component: Palindromo;
  let fixture: ComponentFixture<Palindromo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Palindromo],
    }).compileComponents();

    fixture = TestBed.createComponent(Palindromo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
