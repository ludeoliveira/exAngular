import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient ) { }

  getContatos() {
    return this.http.get('http://localhost:3000/contatos')
  }

  getUmContato(id:number) {
    return this.http.get(`http://localhost:3000/contatos/${id}`)
  }

  save(data:any) {
    return this.http.post('http://localhost:3000/contatos', data)
  }

  alterarContato(dados:any) {
    return this.http.put(`http://localhost:3000/contatos/${dados.id}`, dados)
  }
}
