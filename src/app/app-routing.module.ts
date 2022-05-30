import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
const routes: Routes = [
  {path: 'veiculos', component: VeiculosComponent},
  {path: 'veiculosForm', component: VeiculoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
