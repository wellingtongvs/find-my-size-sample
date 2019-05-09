import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeFinderComponent } from './size-finder.component';

describe('SizeFinderComponent', () => {
  let component: SizeFinderComponent;
  let fixture: ComponentFixture<SizeFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
