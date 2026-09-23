import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperasBas } from './operas-bas';

describe('OperasBas', () => {
  let component: OperasBas;
  let fixture: ComponentFixture<OperasBas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperasBas],
    }).compileComponents();

    fixture = TestBed.createComponent(OperasBas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
