import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameDetailComponent } from './videogame-detail.component';

describe('VideogameDetailComponent', () => {
  let component: VideogameDetailComponent;
  let fixture: ComponentFixture<VideogameDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideogameDetailComponent]
    });
    fixture = TestBed.createComponent(VideogameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
