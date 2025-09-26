import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTelefonicaPage } from './lista-telefonica.page';

describe('ListaTelefonicaPage', () => {
  let component: ListaTelefonicaPage;
  let fixture: ComponentFixture<ListaTelefonicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelefonicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
