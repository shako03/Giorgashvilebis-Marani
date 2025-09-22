import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoberNiggerComponent } from './bober-nigger.component';

describe('BoberNiggerComponent', () => {
  let component: BoberNiggerComponent;
  let fixture: ComponentFixture<BoberNiggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoberNiggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoberNiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
