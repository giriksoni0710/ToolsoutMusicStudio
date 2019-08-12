import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookserviceComponentComponent } from './bookservice-component.component';

describe('BookserviceComponentComponent', () => {
  let component: BookserviceComponentComponent;
  let fixture: ComponentFixture<BookserviceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookserviceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookserviceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
