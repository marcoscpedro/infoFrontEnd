import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  veiculos: any = []
  displayedColumns: string[] = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'editar', 'excluir']
  constructor(
    private veiculosSrv: VeiculosService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.veiculos = await this.veiculosSrv.index()
  }


  async delete(id: string) {
    try {
      await this.veiculosSrv.delete(id)
      this.ngOnInit()
      this.snackBar.open("Veiculo removido com sucesso!", "Ok"), {
        duration:5000
      }
    } catch (error) {
      this.snackBar.open('Não foi possível excluir o veiculo.', 'Ok', {
        duration:5000
      })
    }
  }
}
