import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiretivasPage } from './diretivas.page';

describe('DiretivasPage', () => {
  let component: DiretivasPage;
  let fixture: ComponentFixture<DiretivasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
