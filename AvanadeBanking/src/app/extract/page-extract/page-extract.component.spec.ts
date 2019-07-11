import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExtractComponent } from './page-extract.component';

describe('PageExtractComponent', () => {
  let component: PageExtractComponent;
  let fixture: ComponentFixture<PageExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
