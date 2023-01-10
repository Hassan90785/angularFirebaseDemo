import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSmartComponent } from './messages-smart.component';

describe('MessagesSmartComponent', () => {
  let component: MessagesSmartComponent;
  let fixture: ComponentFixture<MessagesSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
