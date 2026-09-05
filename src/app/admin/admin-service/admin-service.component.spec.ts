import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceComponent } from './admin-service.component';

describe('AdminServiceComponent', () => {
  let component: AdminServiceComponent;
  let fixture: ComponentFixture<AdminServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
