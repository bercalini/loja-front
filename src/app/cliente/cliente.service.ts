import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { Pagamento } from '../venda/pagamento';
import { environment } from 'src/environment.prod';
//import { environment } from 'src/environment ';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 // apiUrlTeste = environment.apiUrl.concat('/clientes');
  apiURLProducaoCliente = environment.apiUrl.concat('/clientes');
 

  constructor(private httpClient: HttpClient) {}

  buscarCep(cep:any) : Observable<any> {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.apiURLProducaoCliente}`, cliente);
  }

  listarClientes() : Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiURLProducaoCliente);
  }

  buscarCliente(id: any) : Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.apiURLProducaoCliente}/${id}`);
  }

  atualizarCliente(cliente: Cliente) : Observable<Cliente> {
     return this.httpClient.put<Cliente>(`${this.apiURLProducaoCliente}/${cliente.id}`, cliente);
  }

  excluirCliente(id: any) : Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.apiURLProducaoCliente}/${id}`);
  }

}
