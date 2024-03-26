import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';
import { Pagamento } from '../venda/pagamento';
import { environment } from 'src/environment.prod';
//import { environment } from 'src/environment ';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //  apiUrlProdutoTeste = environment.apiUrl.concat('/produtos');
   // apiUrlPagamentoTeste = environment.apiUrl.concat('/formapagamentos');

    apiUrlProdutoProd = environment.apiUrl.concat('/produtos');
    apiUrlPagamentoProd = environment.apiUrl.concat('/produtos');

    salvarProduto(produto: Produto) : Observable<Produto> {
      return this.httpClient.post<Produto>(`${this.apiUrlProdutoProd}`, produto);
    }

    listarProdutos() : Observable<Produto[]> {
      return this.httpClient.get<Produto[]>(`${this.apiUrlProdutoProd}`);
    }

    buscarPorId(id: any) : Observable<Produto> {
      return this.httpClient.get<Produto>(`${this.apiUrlProdutoProd}/${id}`);
    }

    editarProduto(produto: Produto) : Observable<Produto> {
      return this.httpClient.put<Produto>(`${this.apiUrlProdutoProd}/${produto.id}`, produto);
    }

    excluirProduto(id: any) : Observable<Produto> {
      return this.httpClient.delete<Produto>(`${this.apiUrlProdutoProd}/${id}`);
    }

    listarPagamentos() : Observable<Pagamento[]> {
      return this.httpClient.get<Pagamento[]>(`${this.apiUrlPagamentoProd}`);
    }

    buscarPagamentoPorId(id: any) : Observable<Pagamento> {
      return this.httpClient.get<Pagamento>(`${this.apiUrlPagamentoProd}/${id}`);
    }
}
