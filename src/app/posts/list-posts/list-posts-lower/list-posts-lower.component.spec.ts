import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsLowerComponent } from './list-posts-lower.component';

describe('ListPostsLowerComponent', () => {
  let component: ListPostsLowerComponent;
  let fixture: ComponentFixture<ListPostsLowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostsLowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
