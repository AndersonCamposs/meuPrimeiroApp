import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedePage } from './rede.page';

describe('RedePage', () => {
  let component: RedePage;
  let fixture: ComponentFixture<RedePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
