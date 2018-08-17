
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PrincipalNavComponent } from './principal-nav.component';

describe('PrincipalNavComponent', () => {
  let component: PrincipalNavComponent;
  let fixture: ComponentFixture<PrincipalNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [PrincipalNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
