import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtividadeSugeridaPage } from './atividade-sugerida.page';

describe('AtividadeSugeridaPage', () => {
  let component: AtividadeSugeridaPage;
  let fixture: ComponentFixture<AtividadeSugeridaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeSugeridaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
