import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDemoComponent } from './blog-demo.component';

describe('BlogDemoComponent', () => {
  let component: BlogDemoComponent;
  let fixture: ComponentFixture<BlogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
