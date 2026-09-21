import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../../shared/models/cep.models';
@Injectable({
  providedIn: 'root',
})
export class CepService {
  private http = inject(HttpClient);
  buscarCep(cep: string) {
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
