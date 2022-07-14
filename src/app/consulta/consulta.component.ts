import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  contatos: any = []
  
  constructor(private service:ContatoService) { }

  ngOnInit(): void {
  }

  consultarTodos():void {
    this.service.getContatos().subscribe(data => this.contatos = data)
  }

}
