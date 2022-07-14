import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    constructor(private service:ContatoService) { }

    ngOnInit(): void {
    }
    msg:string = ''
    saveContato(data:any) {
      this.service.save(data).subscribe(data => this.msg = 'Contato salvo om sucesso')
    }

}
