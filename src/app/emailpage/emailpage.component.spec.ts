import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpageComponent } from './emailpage.component';

describe('EmailpageComponent', () => {
  let component: EmailpageComponent;
  let fixture: ComponentFixture<EmailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
