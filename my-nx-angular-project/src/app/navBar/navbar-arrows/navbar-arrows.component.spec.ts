import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarArrowsComponent } from './navbar-arrows.component';

describe('NavbarArrowsComponent', () => {
  let component: NavbarArrowsComponent;
  let fixture: ComponentFixture<NavbarArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarArrowsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
