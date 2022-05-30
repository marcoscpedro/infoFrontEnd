import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {
  title: string = "Adicionando Veiculo"
  veiculo: any = {
    placa:"",
    chassi:"",
    renavam:"",
    modelo:"",
    marca:"",
    ano:""
  }
  constructor(
    private veiculoSrv: VeiculosService,
    private snackBar: MatSnackBar,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(){
    if (this.actRoute.snapshot.params['id']){
      try {
        this.veiculo = await this.veiculoSrv.read(this.actRoute.snapshot.params['id'])
        this.title = 'Atualizando Veiculo'
      } catch (error) {
        this.snackBar.open("Não foi possível carregar os dados para edição", 'Ok', {
          duration:5000
        })
      }
    }
  }

  async save (form: NgForm){
    try {
      if (form.valid){
        if (this.actRoute.snapshot.params) {
          await this.veiculoSrv.update(this.veiculo, this.actRoute.snapshot.params['id'])
        } else{
          await this.veiculoSrv.create(this.veiculo)
        }
        this.snackBar.open('Dados salvos com sucesso', 'Ok', {
          duration: 5000
        })
        this.router.navigateByUrl("/veiculos")
      }
    } catch (error) {
      this.snackBar.open('Não foi possivel salvar os dados', 'Ok', {
        duration: 5000
      })
      
    }
  }


  async voltar(form: NgForm){
    let result = true
    if (form.dirty && form.touched) {
      result = confirm("Nenhum dado foi salvo. Deseja voltar?")
    }
    if (result) this.router.navigateByUrl('/veiculos')
  }
}
