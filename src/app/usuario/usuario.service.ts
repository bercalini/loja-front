import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environment.prod';
//import { environment } from 'src/environment ';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  //apiUrlUsuarioTeste = environment.apiUrl.concat('/usuarios');
  apiUrlUsuarioProd = environment.apiUrl.concat('/usuarios');

  salvar(usuario: Usuario) : Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.apiUrlUsuarioProd}`, usuario);
  }

  listar() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.apiUrlUsuarioProd}`);
  }

  buscarPorId(id: any) : Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.apiUrlUsuarioProd}/${id}`);
  }

  atualizar(usuario: Usuario) : Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.apiUrlUsuarioProd}/${usuario.id}`, usuario);
  }

  excluir(id: any) : Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.apiUrlUsuarioProd}/${id}`);
  }

  inativar(usuario: Usuario) : Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.apiUrlUsuarioProd}/inativar/${usuario.id}`, usuario);
  }

  ativar(usuario: Usuario) : Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.apiUrlUsuarioProd}/ativar/${usuario.id}`, usuario);
  }

}
