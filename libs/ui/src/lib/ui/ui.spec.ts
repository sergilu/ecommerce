import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcommerceUi } from './ui';

describe('EcommerceUi', () => {
  let component: EcommerceUi;
  let fixture: ComponentFixture<EcommerceUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceUi],
    }).compileComponents();

    fixture = TestBed.createComponent(EcommerceUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
