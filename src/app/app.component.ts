import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template:`
  <div>
  <mat-toolbar color="primary">
  <span>Veiculos</span>
  <span class="example-spacer"></span>
  </mat-toolbar>

  <div class="content">

      <router-outlet></router-outlet>

  </div>
  </div>
  
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'infoFrontEnd';
}
