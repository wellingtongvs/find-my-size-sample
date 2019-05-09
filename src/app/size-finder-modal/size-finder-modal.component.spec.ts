import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeFinderModalComponent } from './size-finder-modal.component';

describe('SizeFinderModalComponent', () => {
  let component: SizeFinderModalComponent;
  let fixture: ComponentFixture<SizeFinderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeFinderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeFinderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
