import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 2 + 4 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(2, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(6);
    })
  );

  it('deve garantir que 3 - 2 = 1',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(3, 2, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 3 * 4 = 12',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(3, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(12);
    })
  );

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );

});
