import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndCreateUserComponent } from './edit-and-create-user.component';

describe('EditAndCreateUserComponent', () => {
  let component: EditAndCreateUserComponent;
  let fixture: ComponentFixture<EditAndCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAndCreateUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAndCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
