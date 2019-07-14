import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePainelComponent } from './page-painel.component';

describe('PagePainelComponent', () => {
  let component: PagePainelComponent;
  let fixture: ComponentFixture<PagePainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
