import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidemenuComponent } from './hidemenu.component';

describe('HidemenuComponent', () => {
  let component: HidemenuComponent;
  let fixture: ComponentFixture<HidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidemenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
