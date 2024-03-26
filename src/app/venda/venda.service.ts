import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from './venda';
import { environment } from 'src/environment.prod';
//import { environment } from 'src/environment ';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private httpClient: HttpClient) { }

  //apiUrlUsuarioTeste = environment.apiUrl.concat('/vendas');
  apiUrlUsuarioProd = environment.apiUrl.concat('/vendas');

  realizarVenda(venda: Venda) : Observable<Venda> {
    return this.httpClient.post<Venda>(`${this.apiUrlUsuarioProd}`, venda);
  }

  listarVenda() : Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(`${this.apiUrlUsuarioProd}`);
  }

}
