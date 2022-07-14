import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [
  {
    path:"consulta",
    component: ConsultaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'contato/:idcontato',
    component: EdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
