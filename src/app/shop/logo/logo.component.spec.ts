import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGoComponent } from './logo.component';

describe('LOGoComponent', () => {
  let component: LOGoComponent;
  let fixture: ComponentFixture<LOGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LOGoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
